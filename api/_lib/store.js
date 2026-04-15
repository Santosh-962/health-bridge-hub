const DATA_MODE = "vercel-blob";
const EMAIL_RECIPIENT = "healthbridgehub0@gmail.com";
const EMAIL_SENDER = process.env.MAIL_FROM || "onboarding@resend.dev";
const EMAIL_MODE = process.env.RESEND_API_KEY ? "resend" : "queued";
const COLLECTION_PREFIX = "health-bridge-hub";
const STORE_NAMES = [
  "donors",
  "bloodBanks",
  "hospitals",
  "medicineInventory",
  "diagnostics",
  "pharmacies",
  "contacts",
  "mailQueue"
];

function nowIso() {
  return new Date().toISOString();
}

async function loadBlobSdk() {
  return import("@vercel/blob");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function collectionPath(storeName) {
  return `${COLLECTION_PREFIX}/${storeName}.json`;
}

function baseCollections() {
  return {
    donors: [],
    bloodBanks: [],
    hospitals: [],
    medicineInventory: [],
    diagnostics: [],
    pharmacies: [],
    contacts: [],
    mailQueue: []
  };
}

function normalizeRecord(storeName, record) {
  const timestamp = nowIso();
  const generatedId = [
    storeName,
    record.state || "",
    record.city || "",
    record.name || record.organization || record.requestType || ""
  ]
    .filter(Boolean)
    .join("-");

  return {
    ...record,
    id: record.id || `${slugify(generatedId) || `${storeName}-${Date.now()}`}-${Math.random().toString(36).slice(2, 7)}`,
    source: record.source || "registration",
    verified: record.verified ?? false,
    createdAt: record.createdAt || timestamp,
    updatedAt: timestamp
  };
}

async function fetchBlobJson(pathname) {
  let blob;

  try {
    const { get } = await loadBlobSdk();
    blob = await get(pathname, { access: "private" });
  } catch (blobError) {
    const message = String(blobError?.message || "");

    if (message.includes("404") || message.toLowerCase().includes("not found")) {
      return null;
    }

    throw blobError;
  }

  if (!blob) {
    return null;
  }

  const response = await fetch(blob.url, {
    headers: process.env.BLOB_READ_WRITE_TOKEN
      ? {
          Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`
        }
      : undefined,
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blob content for ${pathname}`);
  }

  return response.json();
}

async function readCollection(storeName) {
  const data = await fetchBlobJson(collectionPath(storeName));
  const collection = Array.isArray(data) ? data : [];

  return collection.sort((left, right) => {
    const rightTime = new Date(right.updatedAt || right.createdAt || 0).getTime();
    const leftTime = new Date(left.updatedAt || left.createdAt || 0).getTime();
    return rightTime - leftTime;
  });
}

async function writeCollection(storeName, records) {
  const { put } = await loadBlobSdk();

  await put(collectionPath(storeName), JSON.stringify(records, null, 2), {
    access: "private",
    contentType: "application/json; charset=utf-8",
    allowOverwrite: true
  });
}

export async function getDatabaseState() {
  const collections = await Promise.all(STORE_NAMES.map((storeName) => readCollection(storeName)));
  const database = baseCollections();

  STORE_NAMES.forEach((storeName, index) => {
    database[storeName] = collections[index];
  });

  return database;
}

export async function saveRecord(storeName, record) {
  const normalized = normalizeRecord(storeName, record);
  const existing = await readCollection(storeName);
  const nextCollection = [normalized, ...existing.filter((item) => item.id !== normalized.id)];

  await writeCollection(storeName, nextCollection);

  return normalized;
}

export async function bulkSeed(seedPayload) {
  for (const storeName of STORE_NAMES) {
    if (!Array.isArray(seedPayload[storeName])) {
      continue;
    }

    const existing = await readCollection(storeName);

    if (existing.length > 0) {
      continue;
    }

    const normalized = seedPayload[storeName].map((record) =>
      normalizeRecord(storeName, {
        ...record,
        source: record.source || "seed",
        verified: record.verified ?? true
      })
    );

    await writeCollection(storeName, normalized);
  }
}

async function queueMail(notification) {
  const queued = await saveRecord("mailQueue", {
    ...notification,
    status: "queued"
  });

  return queued;
}

async function sendResendEmail(subject, html) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: EMAIL_SENDER,
      to: [EMAIL_RECIPIENT],
      subject,
      html
    })
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend request failed: ${body}`);
  }

  return response.json();
}

function renderMailHtml(subject, record) {
  const rows = Object.entries(record)
    .filter(([key]) => !["id", "updatedAt"].includes(key))
    .map(([key, value]) => `<tr><td style="padding:8px;border:1px solid #d7e3f0;font-weight:700;">${key}</td><td style="padding:8px;border:1px solid #d7e3f0;">${String(value)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#16324f;">
      <h2 style="margin-bottom:12px;">${subject}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${rows}</table>
    </div>
  `;
}

export async function processNotification(subject, record) {
  const payload = {
    subject,
    recipient: EMAIL_RECIPIENT,
    createdAt: nowIso(),
    record
  };

  if (!process.env.RESEND_API_KEY) {
    await queueMail(payload);
    return { emailMode: "queued", emailRecipient: EMAIL_RECIPIENT };
  }

  try {
    await sendResendEmail(subject, renderMailHtml(subject, record));
    return { emailMode: "resend", emailRecipient: EMAIL_RECIPIENT };
  } catch (emailError) {
    await queueMail({
      ...payload,
      error: emailError.message
    });

    return { emailMode: "queued", emailRecipient: EMAIL_RECIPIENT };
  }
}

export function getRuntimeMeta() {
  return {
    dataMode: DATA_MODE,
    emailMode: EMAIL_MODE,
    emailRecipient: EMAIL_RECIPIENT,
    blobConfigured: Boolean(process.env.BLOB_READ_WRITE_TOKEN)
  };
}

export function assertBackendConfigured() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    throw new Error("Missing BLOB_READ_WRITE_TOKEN. Connect a Vercel Blob store to enable backend persistence.");
  }
}
