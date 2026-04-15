import { error, json, readJson } from "./_lib/http.js";
import { assertBackendConfigured, getRuntimeMeta, processNotification, saveRecord } from "./_lib/store.js";

export async function POST(request) {
  try {
    assertBackendConfigured();
    const record = await saveRecord("contacts", await readJson(request));
    const email = await processNotification(`Partner request: ${record.requestType || "General inquiry"}`, record);

    return json({
      ok: true,
      record,
      databaseMode: getRuntimeMeta().dataMode,
      ...email
    });
  } catch (backendError) {
    return error(backendError.message, 503, getRuntimeMeta());
  }
}
