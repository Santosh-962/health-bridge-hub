const donors = [
  { name: "Aarav Sharma", blood: "O+", city: "Delhi", state: "Delhi", phone: "+91 98111 44550", availability: "Available in 30 mins" },
  { name: "Ritika Nair", blood: "A-", city: "Kochi", state: "Kerala", phone: "+91 98470 21458", availability: "Available today" },
  { name: "Vikram Singh", blood: "B+", city: "Jaipur", state: "Rajasthan", phone: "+91 98290 75341", availability: "Available in 2 hrs" },
  { name: "Megha Patel", blood: "AB+", city: "Ahmedabad", state: "Gujarat", phone: "+91 98982 33210", availability: "Available today" },
  { name: "Sana Khan", blood: "O-", city: "Mumbai", state: "Maharashtra", phone: "+91 99870 65112", availability: "Priority donor" },
  { name: "Harish Rao", blood: "B-", city: "Bengaluru", state: "Karnataka", phone: "+91 98451 31088", availability: "Available in 1 hr" },
  { name: "Priya Reddy", blood: "A+", city: "Hyderabad", state: "Telangana", phone: "+91 99491 77110", availability: "Available today" },
  { name: "Rohan Das", blood: "AB-", city: "Kolkata", state: "West Bengal", phone: "+91 98301 88344", availability: "Available in 45 mins" }
];

const bloodBanks = [
  { name: "Delhi Central Blood Bank", city: "Delhi", state: "Delhi", phone: "011-4100-1100", stock: "Platelets, O+, A+", open: "24x7" },
  { name: "KEM Blood Centre", city: "Mumbai", state: "Maharashtra", phone: "022-2413-6000", stock: "O-, B+, AB+", open: "24x7" },
  { name: "Narayana Blood Centre", city: "Bengaluru", state: "Karnataka", phone: "080-7122-2222", stock: "A+, B-, O+", open: "24x7" },
  { name: "Apollo Blood Bank", city: "Hyderabad", state: "Telangana", phone: "040-2360-7777", stock: "AB+, A-, O-", open: "24x7" },
  { name: "Sawai Man Singh Blood Bank", city: "Jaipur", state: "Rajasthan", phone: "0141-2518-400", stock: "B+, O+, A+", open: "6am - 11pm" },
  { name: "Amrita Blood Services", city: "Kochi", state: "Kerala", phone: "0484-285-1234", stock: "A+, O-, Platelets", open: "24x7" }
];

const hospitals = [
  {
    name: "AIIMS Trauma Centre",
    city: "Delhi",
    state: "Delhi",
    phone: "011-2659-4444",
    highway: "NH 48",
    nearHighway: true,
    services: ["Trauma", "ICU", "Cardiac"],
    totalBeds: 180,
    availableBeds: 44,
    icuBeds: 12,
    ventilators: 9,
    locality: "Ansari Nagar"
  },
  {
    name: "Kokilaben Emergency Hospital",
    city: "Mumbai",
    state: "Maharashtra",
    phone: "022-4269-6969",
    highway: "Western Express Highway",
    nearHighway: true,
    services: ["Trauma", "Burns", "ICU"],
    totalBeds: 220,
    availableBeds: 38,
    icuBeds: 10,
    ventilators: 6,
    locality: "Andheri West"
  },
  {
    name: "Manipal Old Airport Road",
    city: "Bengaluru",
    state: "Karnataka",
    phone: "080-2502-4444",
    highway: "NH 44",
    nearHighway: true,
    services: ["Cardiac", "ICU", "Trauma"],
    totalBeds: 250,
    availableBeds: 61,
    icuBeds: 18,
    ventilators: 11,
    locality: "Domlur"
  },
  {
    name: "Yashoda Super Speciality",
    city: "Hyderabad",
    state: "Telangana",
    phone: "040-4567-4567",
    highway: "NH 65",
    nearHighway: true,
    services: ["Cardiac", "ICU", "Burns"],
    totalBeds: 210,
    availableBeds: 48,
    icuBeds: 15,
    ventilators: 10,
    locality: "Somajiguda"
  },
  {
    name: "Ruby Hall Clinic",
    city: "Pune",
    state: "Maharashtra",
    phone: "020-6645-5100",
    highway: "Pune-Solapur Road",
    nearHighway: false,
    services: ["ICU", "Cardiac"],
    totalBeds: 190,
    availableBeds: 52,
    icuBeds: 14,
    ventilators: 8,
    locality: "Sassoon Road"
  },
  {
    name: "Medanta Emergency Institute",
    city: "Gurugram",
    state: "Haryana",
    phone: "0124-4141-414",
    highway: "NH 48",
    nearHighway: true,
    services: ["Trauma", "Cardiac", "ICU"],
    totalBeds: 300,
    availableBeds: 74,
    icuBeds: 20,
    ventilators: 14,
    locality: "Sector 38"
  },
  {
    name: "AIG Hospitals",
    city: "Hyderabad",
    state: "Telangana",
    phone: "040-4244-4222",
    highway: "Outer Ring Road",
    nearHighway: true,
    services: ["ICU", "Trauma"],
    totalBeds: 160,
    availableBeds: 27,
    icuBeds: 8,
    ventilators: 4,
    locality: "Gachibowli"
  },
  {
    name: "Lisie Medical Centre",
    city: "Kochi",
    state: "Kerala",
    phone: "0484-2400-100",
    highway: "NH 66",
    nearHighway: true,
    services: ["Cardiac", "ICU"],
    totalBeds: 170,
    availableBeds: 59,
    icuBeds: 11,
    ventilators: 7,
    locality: "Kaloor"
  }
];

const medicineInventory = [
  { medicine: "Meropenem 1g", company: "Sun Pharma", city: "Delhi", state: "Delhi", status: "In Stock", stock: "1,280 vials", eta: "Dispatch in 3 hrs" },
  { medicine: "Insulin Glargine", company: "Lupin", city: "Mumbai", state: "Maharashtra", status: "Restocking", stock: "Restock 480 pens", eta: "ETA 8 hrs" },
  { medicine: "Doxorubicin", company: "Dr. Reddy's", city: "Hyderabad", state: "Telangana", status: "In Stock", stock: "720 units", eta: "Dispatch in 2 hrs" },
  { medicine: "Amoxicillin 625", company: "Cipla", city: "Bengaluru", state: "Karnataka", status: "In Stock", stock: "14,000 strips", eta: "Dispatch in 6 hrs" },
  { medicine: "IV Normal Saline", company: "Abbott", city: "Ahmedabad", state: "Gujarat", status: "Critical", stock: "180 bags", eta: "Priority allocation needed" },
  { medicine: "Paracetamol IV", company: "Mankind", city: "Jaipur", state: "Rajasthan", status: "Restocking", stock: "640 bottles", eta: "ETA 5 hrs" },
  { medicine: "Enoxaparin", company: "Zydus", city: "Kolkata", state: "West Bengal", status: "In Stock", stock: "860 syringes", eta: "Dispatch in 4 hrs" },
  { medicine: "Anti-Rabies Vaccine", company: "Bharat Biotech", city: "Chennai", state: "Tamil Nadu", status: "In Stock", stock: "350 doses", eta: "Dispatch in 1 hr" }
];

const diagnostics = [
  { name: "Metro Imaging Centre", city: "Delhi", state: "Delhi", locality: "Karol Bagh", services: ["X-Ray", "CT", "Pathology"], hours: "24x7", rating: "4.8/5" },
  { name: "Precision Diagnostics", city: "Mumbai", state: "Maharashtra", locality: "Dadar", services: ["X-Ray", "MRI", "Pathology"], hours: "6am - 11pm", rating: "4.7/5" },
  { name: "Aster Scan Hub", city: "Bengaluru", state: "Karnataka", locality: "Indiranagar", services: ["MRI", "CT", "X-Ray"], hours: "24x7", rating: "4.9/5" },
  { name: "Mediscan Labs", city: "Hyderabad", state: "Telangana", locality: "Banjara Hills", services: ["X-Ray", "Pathology"], hours: "24x7", rating: "4.6/5" },
  { name: "Lifeline Diagnostics", city: "Jaipur", state: "Rajasthan", locality: "Malviya Nagar", services: ["CT", "Pathology", "X-Ray"], hours: "7am - 10pm", rating: "4.7/5" },
  { name: "CarePath Labs", city: "Kochi", state: "Kerala", locality: "Edappally", services: ["Pathology", "MRI"], hours: "24x7", rating: "4.8/5" },
  { name: "Apollo X-Ray Studio", city: "Chennai", state: "Tamil Nadu", locality: "Teynampet", services: ["X-Ray", "CT"], hours: "24x7", rating: "4.8/5" },
  { name: "HealthTrack Imaging", city: "Pune", state: "Maharashtra", locality: "Kothrud", services: ["MRI", "Pathology"], hours: "6am - 10pm", rating: "4.5/5" }
];

const pharmacies = [
  { name: "MediCare Pharmacy", locality: "Ansari Nagar", city: "Delhi", state: "Delhi", phone: "011-4555-8080", hours: "24x7", emergency: true },
  { name: "Lifeline Drugs", locality: "Andheri West", city: "Mumbai", state: "Maharashtra", phone: "022-4800-1212", hours: "24x7", emergency: true },
  { name: "BlueCross Pharmacy", locality: "Domlur", city: "Bengaluru", state: "Karnataka", phone: "080-4100-5555", hours: "24x7", emergency: true },
  { name: "CityMed Pharmacy", locality: "Somajiguda", city: "Hyderabad", state: "Telangana", phone: "040-6100-7777", hours: "24x7", emergency: true },
  { name: "RapidCare Pharmacy", locality: "Kaloor", city: "Kochi", state: "Kerala", phone: "0484-290-9090", hours: "24x7", emergency: true },
  { name: "Redline Pharmacy", locality: "Karol Bagh", city: "Delhi", state: "Delhi", phone: "011-4789-5500", hours: "6am - 12am", emergency: false }
];

const indiaCoverage = [
  { state: "Andhra Pradesh", city: "Visakhapatnam", locality: "MVP Colony", highway: "NH 16" },
  { state: "Arunachal Pradesh", city: "Itanagar", locality: "Naharlagun", highway: "NH 415" },
  { state: "Assam", city: "Guwahati", locality: "GS Road", highway: "NH 27" },
  { state: "Bihar", city: "Patna", locality: "Kankarbagh", highway: "NH 31" },
  { state: "Chhattisgarh", city: "Raipur", locality: "Shankar Nagar", highway: "NH 53" },
  { state: "Goa", city: "Panaji", locality: "Miramar", highway: "NH 66" },
  { state: "Gujarat", city: "Ahmedabad", locality: "Navrangpura", highway: "NH 48" },
  { state: "Haryana", city: "Gurugram", locality: "Sector 38", highway: "NH 48" },
  { state: "Himachal Pradesh", city: "Shimla", locality: "Sanjauli", highway: "NH 5" },
  { state: "Jharkhand", city: "Ranchi", locality: "Bariatu", highway: "NH 20" },
  { state: "Karnataka", city: "Bengaluru", locality: "Domlur", highway: "NH 44" },
  { state: "Kerala", city: "Kochi", locality: "Edappally", highway: "NH 66" },
  { state: "Madhya Pradesh", city: "Bhopal", locality: "Arera Colony", highway: "NH 46" },
  { state: "Maharashtra", city: "Mumbai", locality: "Dadar", highway: "NH 48" },
  { state: "Manipur", city: "Imphal", locality: "Lamphel", highway: "NH 2" },
  { state: "Meghalaya", city: "Shillong", locality: "Laitumkhrah", highway: "NH 6" },
  { state: "Mizoram", city: "Aizawl", locality: "Dawrpui", highway: "NH 6" },
  { state: "Nagaland", city: "Kohima", locality: "Midland", highway: "NH 29" },
  { state: "Odisha", city: "Bhubaneswar", locality: "Saheed Nagar", highway: "NH 16" },
  { state: "Punjab", city: "Ludhiana", locality: "Civil Lines", highway: "NH 44" },
  { state: "Rajasthan", city: "Jaipur", locality: "Malviya Nagar", highway: "NH 48" },
  { state: "Sikkim", city: "Gangtok", locality: "Tadong", highway: "NH 10" },
  { state: "Tamil Nadu", city: "Chennai", locality: "Teynampet", highway: "NH 32" },
  { state: "Telangana", city: "Hyderabad", locality: "Banjara Hills", highway: "NH 65" },
  { state: "Tripura", city: "Agartala", locality: "Dhaleswar", highway: "NH 8" },
  { state: "Uttar Pradesh", city: "Lucknow", locality: "Gomti Nagar", highway: "NH 27" },
  { state: "Uttarakhand", city: "Dehradun", locality: "Ballupur", highway: "NH 7" },
  { state: "West Bengal", city: "Kolkata", locality: "Salt Lake", highway: "NH 12" },
  { state: "Andaman and Nicobar Islands", city: "Port Blair", locality: "Aberdeen Bazaar", highway: "Andaman Trunk Road" },
  { state: "Chandigarh", city: "Chandigarh", locality: "Sector 32", highway: "NH 5" },
  { state: "Dadra and Nagar Haveli and Daman and Diu", city: "Daman", locality: "Nani Daman", highway: "NH 848B" },
  { state: "Delhi", city: "Delhi", locality: "Ansari Nagar", highway: "NH 48" },
  { state: "Jammu and Kashmir", city: "Srinagar", locality: "Bemina", highway: "NH 44" },
  { state: "Ladakh", city: "Leh", locality: "Choglamsar", highway: "NH 1" },
  { state: "Lakshadweep", city: "Kavaratti", locality: "Kavaratti Bazar", highway: "Island Corridor" },
  { state: "Puducherry", city: "Puducherry", locality: "White Town", highway: "NH 32" }
];

const seedStateLabels = new Map(indiaCoverage.map((region) => [normalizeValue(region.state), region.state]));
const stateDefaults = new Map(indiaCoverage.map((region) => [normalizeValue(region.state), region]));
const cityDistrictAliases = new Map([
  ["andaman and nicobar islands|port blair", "South Andamans"],
  ["andhra pradesh|visakhapatnam", "Visakhapatnam"],
  ["arunachal pradesh|itanagar", "Papum Pare"],
  ["assam|guwahati", "Kamrup Metropolitan"],
  ["bihar|patna", "Patna"],
  ["chandigarh|chandigarh", "Chandigarh"],
  ["dadra and nagar haveli and daman and diu|daman", "Daman"],
  ["delhi|delhi", "New Delhi"],
  ["goa|panaji", "North Goa"],
  ["gujarat|ahmedabad", "Ahmedabad"],
  ["haryana|gurugram", "Gurugram"],
  ["haryana|gurgaon", "Gurugram"],
  ["jammu and kashmir|srinagar", "Srinagar"],
  ["karnataka|bengaluru", "Bengaluru Urban"],
  ["karnataka|bangalore", "Bengaluru Urban"],
  ["kerala|kochi", "Ernakulam"],
  ["ladakh|leh", "Leh"],
  ["lakshadweep|kavaratti", "Lakshadweep"],
  ["maharashtra|mumbai", "Mumbai City"],
  ["maharashtra|pune", "Pune"],
  ["manipur|imphal", "Imphal West"],
  ["meghalaya|shillong", "East Khasi Hills"],
  ["mizoram|aizawl", "Aizawl"],
  ["nagaland|kohima", "Kohima"],
  ["odisha|bhubaneswar", "Khordha"],
  ["puducherry|puducherry", "Puducherry"],
  ["punjab|ludhiana", "Ludhiana"],
  ["rajasthan|jaipur", "Jaipur"],
  ["sikkim|gangtok", "Gangtok"],
  ["tamil nadu|chennai", "Chennai"],
  ["telangana|hyderabad", "Hyderabad"],
  ["tripura|agartala", "West Tripura"],
  ["uttar pradesh|lucknow", "Lucknow"],
  ["uttarakhand|dehradun", "Dehradun"],
  ["west bengal|kolkata", "Kolkata"]
]);
const INDIA_LOCATIONS_FILE = "/data-india-districts.json";
const INDIA_LOCATION_FALLBACK_MESSAGE = "Live Vercel storage is not connected yet, so this entry is saved on this device until Blob is configured.";
const DISPLAY_LIMITS = {
  directory: 18,
  hospitals: 18,
  medicine: 15,
  diagnostics: 18
};

let seedPrepared = false;
let seedData = null;
let apiReachable = false;
let blobConfigured = false;
let locationDirectory = new Map();
let districtCoverage = [];

const elements = {
  nav: document.querySelector(".site-nav"),
  menuToggle: document.querySelector(".menu-toggle"),
  metricDonors: document.querySelector("#metric-donors"),
  metricHospitals: document.querySelector("#metric-hospitals"),
  metricBloodbanks: document.querySelector("#metric-bloodbanks"),
  metricLabs: document.querySelector("#metric-labs"),
  globalSync: document.querySelector("#global-sync"),
  bloodSync: document.querySelector("#blood-sync"),
  hospitalSyncHead: document.querySelector("#hospital-sync-head"),
  medicineSync: document.querySelector("#medicine-sync"),
  diagnosticSync: document.querySelector("#diagnostic-sync"),
  opsSync: document.querySelector("#ops-sync"),
  emergencySummary: document.querySelector("#emergency-summary"),
  quickState: document.querySelector("#quick-state"),
  quickDistrict: document.querySelector("#quick-district"),
  quickCity: document.querySelector("#quick-city"),
  quickLocality: document.querySelector("#quick-locality"),
  quickApply: document.querySelector("#quick-apply"),
  quickHospitalCount: document.querySelector("#quick-hospital-count"),
  quickBloodbankCount: document.querySelector("#quick-bloodbank-count"),
  quickLabCount: document.querySelector("#quick-lab-count"),
  quickPharmacyCount: document.querySelector("#quick-pharmacy-count"),
  directorySearch: document.querySelector("#directory-search"),
  directoryState: document.querySelector("#directory-state"),
  directoryDistrict: document.querySelector("#directory-district"),
  directoryCity: document.querySelector("#directory-city"),
  directoryBlood: document.querySelector("#directory-blood"),
  donorList: document.querySelector("#donor-list"),
  donorCount: document.querySelector("#donor-count"),
  bloodbankList: document.querySelector("#bloodbank-list"),
  bloodbankCount: document.querySelector("#bloodbank-count"),
  hospitalSearch: document.querySelector("#hospital-search"),
  hospitalState: document.querySelector("#hospital-state"),
  hospitalDistrict: document.querySelector("#hospital-district"),
  hospitalService: document.querySelector("#hospital-service"),
  highwayOnly: document.querySelector("#highway-only"),
  hospitalGrid: document.querySelector("#hospital-grid"),
  highwayHospitals: document.querySelector("#highway-hospitals"),
  hospitalSync: document.querySelector("#hospital-sync"),
  medicineSearch: document.querySelector("#medicine-search"),
  medicineState: document.querySelector("#medicine-state"),
  medicineDistrict: document.querySelector("#medicine-district"),
  medicineStatus: document.querySelector("#medicine-status"),
  medicineGrid: document.querySelector("#medicine-grid"),
  diagnosticSearch: document.querySelector("#diagnostic-search"),
  diagnosticState: document.querySelector("#diagnostic-state"),
  diagnosticDistrict: document.querySelector("#diagnostic-district"),
  diagnosticService: document.querySelector("#diagnostic-service"),
  diagnosticGrid: document.querySelector("#diagnostic-grid"),
  emergencyState: document.querySelector("#emergency-state"),
  emergencyDistrict: document.querySelector("#emergency-district"),
  emergencyCity: document.querySelector("#emergency-city"),
  emergencyLocality: document.querySelector("#emergency-locality"),
  emergencyButton: document.querySelector("#emergency-button"),
  emergencyHospitals: document.querySelector("#emergency-hospitals"),
  emergencyBloodbanks: document.querySelector("#emergency-bloodbanks"),
  emergencyPharmacies: document.querySelector("#emergency-pharmacies"),
  adminPendingCount: document.querySelector("#admin-pending-count"),
  adminRequestCount: document.querySelector("#admin-request-count"),
  adminEmergencyCount: document.querySelector("#admin-emergency-count"),
  adminEmailMode: document.querySelector("#admin-email-mode"),
  adminEmailRecipient: document.querySelector("#admin-email-recipient"),
  adminFeedCount: document.querySelector("#admin-feed-count"),
  adminFeed: document.querySelector("#admin-feed"),
  stickyNearest: document.querySelector("#sticky-nearest"),
  stickyCall: document.querySelector("#sticky-call"),
  stickyDirections: document.querySelector("#sticky-directions"),
  donorState: document.querySelector("#donor-state"),
  donorDistrict: document.querySelector("#donor-district"),
  donorForm: document.querySelector("#donor-form"),
  hospitalFormState: document.querySelector("#hospital-form-state"),
  hospitalFormDistrict: document.querySelector("#hospital-form-district"),
  hospitalForm: document.querySelector("#hospital-form"),
  pharmacyFormState: document.querySelector("#pharmacy-form-state"),
  pharmacyFormDistrict: document.querySelector("#pharmacy-form-district"),
  pharmacyForm: document.querySelector("#pharmacy-form"),
  contactState: document.querySelector("#contact-state"),
  contactDistrict: document.querySelector("#contact-district"),
  contactForm: document.querySelector("#contact-form")
};

function titleCase(value) {
  return value
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function makeMobileNumber(index) {
  const value = String(8800000000 + index * 1739);
  return `+91 ${value.slice(0, 5)} ${value.slice(5)}`;
}

function makeDeskNumber(index) {
  const value = String(4000000000 + index * 271);
  return `${value.slice(0, 4)}-${value.slice(4, 7)}-${value.slice(7)}`;
}

function compactSpaces(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function uniqueValues(values) {
  return [...new Set(values.filter(Boolean))];
}

function canonicalStateName(value) {
  const cleaned = compactSpaces(value);
  return seedStateLabels.get(normalizeValue(cleaned)) || cleaned;
}

function simplifiedPlaceName(value) {
  return compactSpaces(String(value || "").replace(/\([^)]*\)/g, "").replace(/\s{2,}/g, " "));
}

function canonicalDistrictName(value) {
  return compactSpaces(value);
}

function getDefaultStateMeta(state) {
  return stateDefaults.get(normalizeValue(state)) || {};
}

function getLocationCollections() {
  return [donors, bloodBanks, hospitals, medicineInventory, diagnostics, pharmacies];
}

function buildLocationPool() {
  return getLocationCollections().flatMap((collection) => collection);
}

function normalizeLocationItem(item) {
  if (!item) {
    return item;
  }

  if (item.state) {
    item.state = canonicalStateName(item.state);
  }

  if (!item.district) {
    item.district = inferDistrict(item);
  } else {
    item.district = canonicalDistrictName(item.district);
  }

  return item;
}

function normalizeCollectionsForLocations() {
  getLocationCollections().forEach((collection) => {
    collection.forEach((item) => normalizeLocationItem(item));
  });
}

function createRecordId(type, record, index) {
  const parts = [type, record.state || "", record.district || "", record.city || "", record.name || record.medicine || record.company || `item-${index}`]
    .filter(Boolean)
    .join("-");
  return slugify(parts);
}

function assignSeedIds(items, type) {
  items.forEach((item, index) => {
    item.id = item.id || createRecordId(type, item, index);
    item.source = item.source || "seed";
    item.verified = item.verified ?? item.source === "seed";
    item.createdAt = item.createdAt || `2026-04-${String((index % 9) + 1).padStart(2, "0")}T09:00:00.000Z`;
    item.updatedAt = item.updatedAt || item.createdAt;
    normalizeLocationItem(item);
  });
}

function getDistrictsForState(state) {
  if (!state || state === "all") {
    return [];
  }

  return locationDirectory.get(canonicalStateName(state)) || [];
}

function getCitiesForScope(state, district) {
  const scoped = buildLocationPool().filter((item) => {
    const matchesState = state === "all" || !state || item.state === state;
    const matchesDistrict = district === "all" || !district || item.district === district;
    return matchesState && matchesDistrict;
  });

  return getUnique(scoped, "city");
}

function inferDistrict(item) {
  const state = canonicalStateName(item?.state);
  const stateDistricts = getDistrictsForState(state);

  if (!stateDistricts.length) {
    return "";
  }

  const districtKey = `${normalizeValue(state)}|${normalizeValue(item?.city)}`;

  if (cityDistrictAliases.has(districtKey)) {
    return cityDistrictAliases.get(districtKey);
  }

  const candidates = uniqueValues([
    item?.district,
    item?.city,
    simplifiedPlaceName(item?.city),
    item?.locality,
    simplifiedPlaceName(item?.locality)
  ]).map((candidate) => normalizeValue(candidate));

  const exactMatch = stateDistricts.find((district) => {
    const districtName = normalizeValue(district);
    const simplifiedDistrict = normalizeValue(simplifiedPlaceName(district));
    return candidates.includes(districtName) || candidates.includes(simplifiedDistrict);
  });

  if (exactMatch) {
    return exactMatch;
  }

  const fuzzyMatch = stateDistricts.find((district) => {
    const districtName = normalizeValue(district);
    const simplifiedDistrict = normalizeValue(simplifiedPlaceName(district));
    return candidates.some((candidate) =>
      candidate && (districtName.includes(candidate) || simplifiedDistrict.includes(candidate) || candidate.includes(districtName) || candidate.includes(simplifiedDistrict))
    );
  });

  return fuzzyMatch || stateDistricts[0];
}

function createCoverageRegion(state, district, index) {
  const defaults = getDefaultStateMeta(state);
  const cleanedDistrict = simplifiedPlaceName(district);
  const city = cleanedDistrict || defaults.city || state;

  return {
    state,
    district,
    city,
    locality: `${city} Health Corridor`,
    highway: defaults.highway || `NH ${10 + (index % 70)}`
  };
}

async function loadIndiaLocationDirectory() {
  try {
    const response = await fetch(INDIA_LOCATIONS_FILE, { cache: "force-cache" });

    if (!response.ok) {
      throw new Error("Location dataset request failed");
    }

    const rows = await response.json();
    const grouped = new Map();

    rows.forEach((row) => {
      const state = canonicalStateName(row.StateName);
      const district = canonicalDistrictName(row["DistrictName(InEnglish)"]);

      if (!state || !district) {
        return;
      }

      if (!grouped.has(state)) {
        grouped.set(state, new Set());
      }

      grouped.get(state).add(district);
    });

    locationDirectory = new Map(
      [...grouped.entries()]
        .sort((left, right) => left[0].localeCompare(right[0]))
        .map(([state, districts]) => [state, [...districts].sort((left, right) => left.localeCompare(right))])
    );
  } catch (error) {
    const fallback = new Map();

    indiaCoverage.forEach((region) => {
      if (!fallback.has(region.state)) {
        fallback.set(region.state, new Set());
      }

      fallback.get(region.state).add(region.city);
    });

    locationDirectory = new Map(
      [...fallback.entries()].map(([state, districts]) => [state, [...districts].sort((left, right) => left.localeCompare(right))])
    );
  }

  districtCoverage = [...locationDirectory.entries()].flatMap(([state, districts]) =>
    districts.map((district, index) => createCoverageRegion(state, district, index))
  );
}

function addIndiaWideCoverage() {
  const donorFirstNames = ["Ananya", "Rahul", "Neha", "Arjun", "Diya", "Karan", "Ishita", "Mohit", "Pooja", "Varun", "Aditi", "Nikhil"];
  const donorLastNames = ["Sharma", "Patel", "Rao", "Singh", "Das", "Nair", "Verma", "Kapoor", "Mehta", "Khan", "Reddy", "Joseph"];
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const availabilitySlots = ["Available in 30 mins", "Available today", "Priority donor", "Available in 2 hrs", "Verified repeat donor"];
  const servicePatterns = [
    ["Trauma", "ICU", "Cardiac"],
    ["ICU", "Burns", "Trauma"],
    ["Cardiac", "ICU", "Neuro"],
    ["Trauma", "Pediatric", "ICU"]
  ];
  const diagnosticPatterns = [
    ["X-Ray", "CT", "Pathology"],
    ["MRI", "CT", "X-Ray"],
    ["X-Ray", "Pathology", "Ultrasound"],
    ["MRI", "Pathology", "CT"]
  ];
  const medicinePatterns = [
    { company: "Sun Pharma", medicine: "Meropenem 1g", status: "In Stock" },
    { company: "Cipla", medicine: "Amoxicillin 625", status: "In Stock" },
    { company: "Dr. Reddy's", medicine: "Doxorubicin", status: "Restocking" },
    { company: "Lupin", medicine: "Insulin Glargine", status: "In Stock" },
    { company: "Zydus", medicine: "Enoxaparin", status: "Critical" },
    { company: "Abbott", medicine: "IV Normal Saline", status: "Restocking" },
    { company: "Mankind", medicine: "Paracetamol IV", status: "In Stock" },
    { company: "Bharat Biotech", medicine: "Anti-Rabies Vaccine", status: "In Stock" }
  ];

  districtCoverage.forEach((region, index) => {
    const blood = bloodGroups[index % bloodGroups.length];
    const alternateBlood = bloodGroups[(index + 3) % bloodGroups.length];
    const services = servicePatterns[index % servicePatterns.length];
    const diagnosticsOffered = diagnosticPatterns[index % diagnosticPatterns.length];
    const medicine = medicinePatterns[index % medicinePatterns.length];
    const availableBeds = 26 + (index % 8) * 7;
    const totalBeds = 140 + (index % 6) * 20;
    const nearHighway = index % 5 !== 0;

    donors.push({
      name: `${donorFirstNames[index % donorFirstNames.length]} ${donorLastNames[index % donorLastNames.length]}`,
      blood,
      city: region.city,
      district: region.district,
      state: region.state,
      phone: makeMobileNumber(index),
      availability: availabilitySlots[index % availabilitySlots.length]
    });

    bloodBanks.push({
      name: `${region.city} Regional Blood Bank`,
      city: region.city,
      district: region.district,
      state: region.state,
      phone: makeDeskNumber(index + 40),
      stock: `${blood}, ${alternateBlood}, Platelets`,
      open: index % 4 === 0 ? "6am - 11pm" : "24x7"
    });

    hospitals.push({
      name: `${region.city} State Emergency Hospital`,
      city: region.city,
      district: region.district,
      state: region.state,
      phone: makeDeskNumber(index + 90),
      highway: region.highway,
      nearHighway,
      services,
      totalBeds,
      availableBeds,
      icuBeds: 6 + (index % 7) * 2,
      ventilators: 4 + (index % 6),
      locality: region.locality
    });

    medicineInventory.push({
      medicine: medicine.medicine,
      company: medicine.company,
      city: region.city,
      district: region.district,
      state: region.state,
      status: medicine.status,
      stock: `${280 + index * 35} units`,
      eta: medicine.status === "Critical" ? "Priority allocation needed" : `Dispatch in ${1 + (index % 6)} hrs`
    });

    diagnostics.push({
      name: `${region.city} Advanced Diagnostics`,
      city: region.city,
      district: region.district,
      state: region.state,
      locality: region.locality,
      services: diagnosticsOffered,
      hours: index % 3 === 0 ? "24x7" : "7am - 10pm",
      rating: `${(4.5 + (index % 5) * 0.1).toFixed(1)}/5`
    });

    pharmacies.push({
      name: `${region.city} Emergency Pharmacy`,
      locality: region.locality,
      city: region.city,
      district: region.district,
      state: region.state,
      phone: makeDeskNumber(index + 140),
      hours: "24x7",
      emergency: true
    });
  });
}

const BRAND_NAME = "Health Bridge Hub";
const API_BASE = "/api";
const DATA_STORES = ["donors", "bloodBanks", "hospitals", "medicineInventory", "diagnostics", "pharmacies"];
let databaseMode = "memory";
let emailMode = "queued";
let emailRecipient = "healthbridgehub0@gmail.com";
let backendAvailable = false;
const partnerRequests = [];
const activityFeed = [];

function prepareSeedData() {
  if (seedPrepared) {
    return seedData;
  }

  normalizeCollectionsForLocations();
  addIndiaWideCoverage();
  normalizeCollectionsForLocations();

  assignSeedIds(donors, "donor");
  assignSeedIds(bloodBanks, "bloodbank");
  assignSeedIds(hospitals, "hospital");
  assignSeedIds(medicineInventory, "medicine");
  assignSeedIds(diagnostics, "diagnostic");
  assignSeedIds(pharmacies, "pharmacy");

  seedData = {
    donors: donors.map((item) => ({ ...item })),
    bloodBanks: bloodBanks.map((item) => ({ ...item })),
    hospitals: hospitals.map((item) => ({ ...item })),
    medicineInventory: medicineInventory.map((item) => ({ ...item })),
    diagnostics: diagnostics.map((item) => ({ ...item })),
    pharmacies: pharmacies.map((item) => ({ ...item }))
  };
  seedPrepared = true;

  return seedData;
}

function getUnique(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function replaceCollection(target, items) {
  target.splice(0, target.length, ...items);
}

function mergeSeedCoverage() {
  if (!seedData) {
    return;
  }

  const mergeCollection = (target, source) => {
    const existing = new Set(target.map((item) => item.id));

    source.forEach((item) => {
      if (!existing.has(item.id)) {
        target.push({ ...item });
      }
    });
  };

  mergeCollection(donors, seedData.donors);
  mergeCollection(bloodBanks, seedData.bloodBanks);
  mergeCollection(hospitals, seedData.hospitals);
  mergeCollection(medicineInventory, seedData.medicineInventory);
  mergeCollection(diagnostics, seedData.diagnostics);
  mergeCollection(pharmacies, seedData.pharmacies);

  normalizeCollectionsForLocations();
}

function normalizeValue(value) {
  return String(value || "").trim().toLowerCase();
}

function isVerified(item) {
  return item?.verified !== false && item?.source !== "registration";
}

function toTitleLabel(value) {
  return titleCase(String(value || "").replace(/[-_]/g, " "));
}

function sanitizePhone(phone) {
  return String(phone || "").replace(/[^\d+]/g, "");
}

function getCallLink(phone) {
  return `tel:${sanitizePhone(phone)}`;
}

function buildLocationLine(item) {
  return uniqueValues([item.locality, item.city, item.district, item.state]).join(", ");
}

function getMapsLink(item) {
  const query = encodeURIComponent([item.name, item.locality, item.city, item.state].filter(Boolean).join(", "));
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function formatTimestamp(value) {
  if (!value) {
    return "Updated recently";
  }

  return `Updated ${new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

function formatTimeOnly(value = new Date()) {
  return new Date(value).toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function getPersistenceMessage(successMessage) {
  if (backendAvailable) {
    return successMessage;
  }

  if (apiReachable && !blobConfigured) {
    return INDIA_LOCATION_FALLBACK_MESSAGE;
  }

  return "The live backend could not be reached, so this entry is saved on this device for now.";
}

function getLatestUpdate(items) {
  return items.reduce((latest, item) => {
    const current = item.updatedAt || item.createdAt;
    if (!latest || new Date(current) > new Date(latest)) {
      return current;
    }

    return latest;
  }, "");
}

function stampRecord(record, overrides = {}) {
  const timestamp = new Date().toISOString();
  return {
    ...record,
    verified: overrides.verified ?? record.verified ?? false,
    source: overrides.source || record.source || "registration",
    createdAt: record.createdAt || timestamp,
    updatedAt: overrides.updatedAt || timestamp
  };
}

function addActivity(type, title, description, status = "Pending review") {
  activityFeed.unshift({
    id: `activity-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    title,
    description,
    status,
    createdAt: new Date().toISOString()
  });

  if (activityFeed.length > 8) {
    activityFeed.length = 8;
  }
}

function syncCollectionsFromPayload(payload) {
  if (payload.donors?.length) {
    replaceCollection(donors, payload.donors);
  }

  if (payload.bloodBanks?.length) {
    replaceCollection(bloodBanks, payload.bloodBanks);
  }

  if (payload.hospitals?.length) {
    replaceCollection(hospitals, payload.hospitals);
  }

  if (payload.medicineInventory?.length) {
    replaceCollection(medicineInventory, payload.medicineInventory);
  }

  if (payload.diagnostics?.length) {
    replaceCollection(diagnostics, payload.diagnostics);
  }

  if (payload.pharmacies?.length) {
    replaceCollection(pharmacies, payload.pharmacies);
  }

  assignSeedIds(donors, "donor");
  assignSeedIds(bloodBanks, "bloodbank");
  assignSeedIds(hospitals, "hospital");
  assignSeedIds(medicineInventory, "medicine");
  assignSeedIds(diagnostics, "diagnostic");
  assignSeedIds(pharmacies, "pharmacy");
}

async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${path}`);
  }

  return response.json();
}

async function syncBackendData() {
  try {
    const health = await apiRequest("/health");
    apiReachable = true;
    databaseMode = health.dataMode || "json-backend";
    emailMode = health.emailMode || "queued";
    emailRecipient = health.emailRecipient || emailRecipient;
    blobConfigured = Boolean(health.blobConfigured);

    if (!blobConfigured) {
      backendAvailable = false;
      return false;
    }

    let bootstrap = await apiRequest("/bootstrap");
    const nextSeedData = prepareSeedData();
    const needsSeed = DATA_STORES.some((storeName) => !Array.isArray(bootstrap[storeName]) || bootstrap[storeName].length === 0);

    if (needsSeed) {
      await apiRequest("/seed", { method: "POST", body: nextSeedData });
      bootstrap = await apiRequest("/bootstrap");
    }

    backendAvailable = true;
    syncCollectionsFromPayload(bootstrap);
    mergeSeedCoverage();
    return true;
  } catch (error) {
    backendAvailable = false;
    databaseMode = apiReachable ? databaseMode : "memory";
    return false;
  }
}

async function persistRecord(storeName, record) {
  const storedRecord = {
    ...record,
    id: record.id || `user-${storeName}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    source: record.source || "registration",
    createdAt: record.createdAt || new Date().toISOString()
  };

  if (!backendAvailable) {
    return storedRecord;
  }

  const routeMap = {
    donors: "/register/donor",
    hospitals: "/register/hospital",
    pharmacies: "/register/pharmacy",
    contacts: "/partner-request"
  };

  const route = routeMap[storeName];

  if (!route) {
    return storedRecord;
  }

  const response = await apiRequest(route, {
    method: "POST",
    body: storedRecord
  });

  if (response.databaseMode) {
    databaseMode = response.databaseMode;
  }

  if (response.emailMode) {
    emailMode = response.emailMode;
  }

  if (response.emailRecipient) {
    emailRecipient = response.emailRecipient;
  }

  return response.record || storedRecord;
}

function getStatesFromAllData() {
  return locationDirectory.size
    ? [...locationDirectory.keys()].sort((left, right) => left.localeCompare(right))
    : getUnique(buildLocationPool(), "state");
}

function fillCitySelect(select, state, district, placeholder, options = {}) {
  fillSelect(select, getCitiesForScope(state, district), placeholder, options);
}

function matchesLocation(item, state, district, city, locality = "") {
  const normalizedLocality = normalizeValue(locality);
  const matchesState = state === "all" || item.state === state;
  const matchesDistrict = district === "all" || !district || item.district === district;
  const matchesCity = city === "all" || !city || item.city === city;
  const matchesLocality = !normalizedLocality || !("locality" in item) || normalizeValue(item.locality).includes(normalizedLocality);
  return matchesState && matchesDistrict && matchesCity && matchesLocality;
}

function fillSelect(select, values, placeholder, options = {}) {
  const current = select.value;
  const placeholderValue = options.placeholderValue ?? "all";
  const defaultValue = options.defaultValue;
  select.innerHTML = "";

  const firstOption = document.createElement("option");
  firstOption.value = placeholderValue;
  firstOption.textContent = placeholder;
  select.appendChild(firstOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });

  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  } else if (defaultValue && [...select.options].some((option) => option.value === defaultValue)) {
    select.value = defaultValue;
  } else {
    select.value = placeholderValue;
  }
}

function renderEmpty(message) {
  return `<div class="empty-state">${message}</div>`;
}

function getResultLabel(total, limit) {
  return total > limit ? `Showing ${limit} of ${total} results` : `${total} results`;
}

function updateSyncIndicators() {
  const allData = [...donors, ...bloodBanks, ...hospitals, ...medicineInventory, ...diagnostics, ...pharmacies];
  const globalStamp = getLatestUpdate(allData);

  if (elements.globalSync) {
    elements.globalSync.textContent = globalStamp ? formatTimestamp(globalStamp) : "Synced just now";
  }

  if (elements.bloodSync) {
    elements.bloodSync.textContent = formatTimestamp(getLatestUpdate([...donors, ...bloodBanks]));
  }

  if (elements.hospitalSyncHead) {
    elements.hospitalSyncHead.textContent = formatTimestamp(getLatestUpdate(hospitals));
  }

  if (elements.medicineSync) {
    elements.medicineSync.textContent = formatTimestamp(getLatestUpdate(medicineInventory));
  }

  if (elements.diagnosticSync) {
    elements.diagnosticSync.textContent = formatTimestamp(getLatestUpdate(diagnostics));
  }

  if (elements.opsSync) {
    elements.opsSync.textContent = globalStamp ? formatTimestamp(globalStamp) : "Updated recently";
  }
}

function renderMetrics() {
  elements.metricDonors.textContent = donors.length.toString().padStart(2, "0");
  elements.metricHospitals.textContent = hospitals.length.toString().padStart(2, "0");
  elements.metricBloodbanks.textContent = bloodBanks.length.toString().padStart(2, "0");
  elements.metricLabs.textContent = diagnostics.length.toString().padStart(2, "0");
}

function renderQuickFinderStats() {
  const state = elements.quickState.value;
  const district = elements.quickDistrict.value;
  const city = elements.quickCity.value;
  const locality = elements.quickLocality.value;

  elements.quickHospitalCount.textContent = hospitals.filter((item) => matchesLocation(item, state, district, city, locality)).length;
  elements.quickBloodbankCount.textContent = bloodBanks.filter((item) => matchesLocation(item, state, district, city, locality)).length;
  elements.quickLabCount.textContent = diagnostics.filter((item) => matchesLocation(item, state, district, city, locality)).length;
  elements.quickPharmacyCount.textContent = pharmacies.filter((item) => matchesLocation(item, state, district, city, locality)).length;
}

function renderOperations() {
  const pendingVerifications =
    donors.filter((item) => !isVerified(item)).length +
    hospitals.filter((item) => !isVerified(item)).length +
    pharmacies.filter((item) => !isVerified(item)).length;
  const emergencyReady = hospitals.filter((item) => item.nearHighway).length + pharmacies.filter((item) => item.emergency).length;

  elements.adminPendingCount.textContent = String(pendingVerifications);
  elements.adminRequestCount.textContent = String(partnerRequests.length);
  elements.adminEmergencyCount.textContent = String(emergencyReady);
  elements.adminEmailMode.textContent = toTitleLabel(emailMode);
  elements.adminEmailRecipient.textContent = emailRecipient;
  elements.adminFeedCount.textContent = `${activityFeed.length} updates`;
  elements.adminFeed.innerHTML = activityFeed.length
    ? activityFeed
        .map(
          (item) => `
            <article class="activity-card">
              <div class="card-badges">
                <span class="badge">${item.type}</span>
                <span class="tag">${item.status}</span>
              </div>
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <span class="update-meta">${formatTimestamp(item.createdAt)}</span>
            </article>
          `
        )
        .join("")
    : renderEmpty("No onboarding activity yet. New registrations and partner requests will appear here.");
}

function getBloodBankStatus(bank) {
  return bank.open === "24x7"
    ? { label: "Available", className: "status-good" }
    : { label: "Limited", className: "status-watch" };
}

function getMedicineStatusClass(status) {
  if (status === "Critical") {
    return "status-critical";
  }

  if (status === "Restocking") {
    return "status-watch";
  }

  return "status-good";
}

function renderActionLinks(item, options = {}) {
  const links = [];

  if (options.call !== false && item.phone) {
    links.push(`<a class="action-link action-call" href="${getCallLink(item.phone)}">Call</a>`);
  }

  if (options.maps !== false) {
    links.push(`<a class="action-link" href="${getMapsLink(item)}" target="_blank" rel="noreferrer">Directions</a>`);
  }

  return links.length ? `<div class="card-actions">${links.join("")}</div>` : "";
}

function updateStickyEmergencyBar(hospital) {
  if (!hospital) {
    elements.stickyNearest.href = "#emergency";
    elements.stickyCall.href = "#emergency";
    elements.stickyDirections.href = "#emergency";
    return;
  }

  elements.stickyNearest.href = getMapsLink(hospital);
  elements.stickyCall.href = getCallLink(hospital.phone);
  elements.stickyDirections.href = getMapsLink(hospital);
}

function renderEmergencySummary() {
  const priorityHospitals = hospitals
    .filter((hospital) => hospital.nearHighway)
    .slice(0, 3)
    .map((hospital) => ({
      name: hospital.name,
      city: hospital.city,
      district: hospital.district,
      state: hospital.state,
      beds: hospital.availableBeds
    }));

  elements.emergencySummary.innerHTML = priorityHospitals
    .map(
      (hospital) => `
        <div class="alert-item">
          <div>
            <strong>${hospital.name}</strong>
            <div class="resource-meta">${uniqueValues([hospital.city, hospital.district, hospital.state]).join(", ")} emergency corridor</div>
          </div>
          <span class="badge status-good">${hospital.beds} beds free</span>
        </div>
      `
    )
    .join("");
}

function syncDirectoryCityOptions() {
  const selectedState = elements.directoryState.value;
  const selectedDistrict = elements.directoryDistrict.value;
  fillCitySelect(elements.directoryCity, selectedState, selectedDistrict, "All cities");
}

function renderDirectory() {
  const query = elements.directorySearch.value.trim().toLowerCase();
  const state = elements.directoryState.value;
  const district = elements.directoryDistrict.value;
  const city = elements.directoryCity.value;
  const blood = elements.directoryBlood.value;

  const donorResults = donors.filter((donor) => {
    const matchesQuery = [donor.name, donor.city, donor.district, donor.state].some((field) =>
      field.toLowerCase().includes(query)
    );
    const matchesState = state === "all" || donor.state === state;
    const matchesDistrict = district === "all" || donor.district === district;
    const matchesCity = city === "all" || donor.city === city;
    const matchesBlood = blood === "all" || donor.blood === blood;
    return matchesQuery && matchesState && matchesDistrict && matchesCity && matchesBlood;
  });

  const bankResults = bloodBanks.filter((bank) => {
    const matchesQuery = [bank.name, bank.city, bank.district, bank.state].some((field) =>
      field.toLowerCase().includes(query)
    );
    const matchesState = state === "all" || bank.state === state;
    const matchesDistrict = district === "all" || bank.district === district;
    const matchesCity = city === "all" || bank.city === city;
    const matchesBlood = blood === "all" || bank.stock.includes(blood);
    return matchesQuery && matchesState && matchesDistrict && matchesCity && matchesBlood;
  });

  const visibleDonors = donorResults.slice(0, DISPLAY_LIMITS.directory);
  const visibleBanks = bankResults.slice(0, DISPLAY_LIMITS.directory);

  elements.donorCount.textContent = getResultLabel(donorResults.length, DISPLAY_LIMITS.directory);
  elements.bloodbankCount.textContent = getResultLabel(bankResults.length, DISPLAY_LIMITS.directory);

  elements.donorList.innerHTML = donorResults.length
    ? visibleDonors
        .map(
          (donor) => `
            <article class="directory-card">
              <h4 class="card-title">${donor.name}</h4>
              <p class="card-meta">${uniqueValues([donor.city, donor.district, donor.state]).join(", ")}</p>
              <div class="card-badges">
                <span class="badge">${donor.blood}</span>
                <span class="tag">${donor.availability}</span>
                ${isVerified(donor) ? `<span class="badge verified-badge">Verified</span>` : `<span class="badge status-watch">Pending</span>`}
              </div>
              <p class="resource-meta">Contact: ${donor.phone}</p>
              <span class="update-meta">${formatTimestamp(donor.updatedAt || donor.createdAt)}</span>
              ${renderActionLinks(donor, { maps: false })}
            </article>
          `
        )
        .join("")
    : renderEmpty("No donors match the current filters.");

  elements.bloodbankList.innerHTML = bankResults.length
    ? visibleBanks
        .map((bank) => {
          const status = getBloodBankStatus(bank);

          return `
            <article class="bloodbank-card">
              <h4 class="card-title">${bank.name}</h4>
              <p class="card-meta">${uniqueValues([bank.city, bank.district, bank.state]).join(", ")}</p>
              <div class="card-badges">
                <span class="badge ${status.className}">${status.label}</span>
                <span class="tag">${bank.open}</span>
                <span class="badge">${bank.stock}</span>
                ${isVerified(bank) ? `<span class="badge verified-badge">Verified Partner</span>` : ""}
              </div>
              <p class="resource-meta">Contact: ${bank.phone}</p>
              <span class="update-meta">${formatTimestamp(bank.updatedAt || bank.createdAt)}</span>
              ${renderActionLinks(bank)}
            </article>
          `;
        })
        .join("")
    : renderEmpty("No blood banks match the current filters.");
}

function renderHighwayHospitals() {
  const highwayResults = hospitals
    .filter((hospital) => hospital.nearHighway)
    .slice(0, 4);

  elements.highwayHospitals.innerHTML = highwayResults
    .map(
      (hospital) => `
        <article class="highway-card">
          <h4 class="resource-name">${hospital.name}</h4>
          <p class="resource-meta">${uniqueValues([hospital.city, hospital.district, hospital.state]).join(", ")}</p>
          <div class="tag-row">
            <span class="badge">${hospital.highway}</span>
            <span class="tag status-good">${hospital.availableBeds} beds open</span>
            ${isVerified(hospital) ? `<span class="badge verified-badge">Verified</span>` : ""}
          </div>
          ${renderActionLinks(hospital)}
        </article>
      `
    )
    .join("");
}

function getHospitalStatus(hospital) {
  const occupancy = 1 - hospital.availableBeds / hospital.totalBeds;

  if (occupancy >= 0.82) {
    return { label: "Critical", className: "status-critical" };
  }

  if (occupancy >= 0.65) {
    return { label: "Limited", className: "status-watch" };
  }

  return { label: "Available", className: "status-good" };
}

function renderHospitals() {
  const query = elements.hospitalSearch.value.trim().toLowerCase();
  const state = elements.hospitalState.value;
  const district = elements.hospitalDistrict.value;
  const service = elements.hospitalService.value;
  const highwayOnly = elements.highwayOnly.checked;

  const results = hospitals.filter((hospital) => {
    const matchesQuery = [hospital.name, hospital.city, hospital.district, hospital.state].some((field) =>
      field.toLowerCase().includes(query)
    );
    const matchesState = state === "all" || hospital.state === state;
    const matchesDistrict = district === "all" || hospital.district === district;
    const matchesService = service === "all" || hospital.services.includes(service);
    const matchesHighway = !highwayOnly || hospital.nearHighway;
    return matchesQuery && matchesState && matchesDistrict && matchesService && matchesHighway;
  });

  const visibleResults = results.slice(0, DISPLAY_LIMITS.hospitals);

  elements.hospitalGrid.innerHTML = results.length
    ? visibleResults
        .map((hospital) => {
          const status = getHospitalStatus(hospital);
          const occupiedPercentage = Math.round(((hospital.totalBeds - hospital.availableBeds) / hospital.totalBeds) * 100);

          return `
            <article class="hospital-card">
              <div class="hospital-top">
                <div>
                  <h3>${hospital.name}</h3>
                  <p class="hospital-meta">${buildLocationLine(hospital)}</p>
                </div>
                <strong class="${status.className}">${status.label}</strong>
              </div>
              <div class="tag-row">
                ${hospital.services.map((item) => `<span class="tag">${item}</span>`).join("")}
                ${hospital.nearHighway ? `<span class="badge">${hospital.highway}</span>` : ""}
                ${isVerified(hospital) ? `<span class="badge verified-badge">Verified Partner</span>` : `<span class="badge status-watch">Pending Review</span>`}
              </div>
              <div class="capacity-grid">
                <div class="capacity-item">
                  <strong>${hospital.availableBeds}</strong>
                  <span>Beds free</span>
                </div>
                <div class="capacity-item">
                  <strong>${hospital.icuBeds}</strong>
                  <span>ICU beds</span>
                </div>
                <div class="capacity-item">
                  <strong>${hospital.ventilators}</strong>
                  <span>Ventilators</span>
                </div>
              </div>
              <div>
                <div class="resource-meta">Occupied ${occupiedPercentage}% of ${hospital.totalBeds} total beds</div>
                <div class="bed-bar" aria-hidden="true">
                  <div class="bed-fill" style="width: ${occupiedPercentage}%"></div>
                </div>
              </div>
              <p class="resource-meta">Emergency contact: ${hospital.phone}</p>
              <span class="update-meta">${formatTimestamp(hospital.updatedAt || hospital.createdAt)}</span>
              ${renderActionLinks(hospital)}
            </article>
          `;
        })
        .join("")
    : renderEmpty("No hospitals match the current filters.");
}

function renderMedicine() {
  const query = elements.medicineSearch.value.trim().toLowerCase();
  const state = elements.medicineState.value;
  const district = elements.medicineDistrict.value;
  const status = elements.medicineStatus.value;

  const results = medicineInventory.filter((item) => {
    const matchesQuery = [item.medicine, item.company, item.city, item.district, item.state].some((field) =>
      field.toLowerCase().includes(query)
    );
    const matchesState = state === "all" || item.state === state;
    const matchesDistrict = district === "all" || item.district === district;
    const matchesStatus = status === "all" || item.status === status;
    return matchesQuery && matchesState && matchesDistrict && matchesStatus;
  });

  const visibleResults = results.slice(0, DISPLAY_LIMITS.medicine);

  elements.medicineGrid.innerHTML = results.length
    ? visibleResults
        .map((item) => {
          const statusClass = getMedicineStatusClass(item.status);

          return `
            <article class="medicine-card">
              <h3 class="resource-name">${item.medicine}</h3>
              <p class="resource-meta">${item.company} - ${uniqueValues([item.city, item.district, item.state]).join(", ")}</p>
              <div class="tag-row">
                <span class="badge ${statusClass}">${item.status}</span>
                <span class="tag">${item.stock}</span>
                <span class="badge verified-badge">Verified Supply Node</span>
              </div>
              <p class="resource-meta">${item.eta}</p>
              <span class="update-meta">${formatTimestamp(item.updatedAt || item.createdAt)}</span>
            </article>
          `;
        })
        .join("")
    : renderEmpty("No medicine supply records match the current filters.");
}

function renderDiagnostics() {
  const query = elements.diagnosticSearch.value.trim().toLowerCase();
  const state = elements.diagnosticState.value;
  const district = elements.diagnosticDistrict.value;
  const service = elements.diagnosticService.value;

  const results = diagnostics.filter((item) => {
    const matchesQuery = [item.name, item.locality, item.city, item.district, item.state].some((field) =>
      field.toLowerCase().includes(query)
    );
    const matchesState = state === "all" || item.state === state;
    const matchesDistrict = district === "all" || item.district === district;
    const matchesService = service === "all" || item.services.includes(service);
    return matchesQuery && matchesState && matchesDistrict && matchesService;
  });

  const visibleResults = results.slice(0, DISPLAY_LIMITS.diagnostics);

  elements.diagnosticGrid.innerHTML = results.length
    ? visibleResults
        .map(
          (item) => `
            <article class="diagnostic-card">
              <h3 class="resource-name">${item.name}</h3>
              <p class="diagnostic-meta">${buildLocationLine(item)}</p>
              <div class="tag-row">
                ${item.services.map((serviceName) => `<span class="tag">${serviceName}</span>`).join("")}
                ${isVerified(item) ? `<span class="badge verified-badge">Verified Lab</span>` : ""}
              </div>
              <p class="resource-meta">Hours: ${item.hours}</p>
              <p class="resource-meta">Rating: ${item.rating}</p>
              <span class="update-meta">${formatTimestamp(item.updatedAt || item.createdAt)}</span>
              ${renderActionLinks(item, { call: false })}
            </article>
          `
        )
        .join("")
    : renderEmpty("No diagnostic centers match the current filters.");
}

function getCityDistanceScore(item, city, locality) {
  let score = 0;

  if (item.city === city) {
    score += 2;
  }

  if (locality && "locality" in item && item.locality.toLowerCase().includes(locality)) {
    score += 2;
  }

  if ("nearHighway" in item && item.nearHighway) {
    score += 1;
  }

  if ("emergency" in item && item.emergency) {
    score += 1;
  }

  return score;
}

function renderEmergencyResources() {
  const state = elements.emergencyState.value;
  const district = elements.emergencyDistrict.value;
  const city = elements.emergencyCity.value;
  const locality = elements.emergencyLocality.value.trim().toLowerCase();

  const rankedHospitals = [...hospitals]
    .filter((hospital) => matchesLocation(hospital, state, district, city, locality))
    .map((hospital) => ({ ...hospital, score: getCityDistanceScore(hospital, city, locality) }))
    .sort((a, b) => b.score - a.score || b.availableBeds - a.availableBeds)
    .slice(0, 3);

  const rankedBloodbanks = [...bloodBanks]
    .filter((bank) => matchesLocation(bank, state, district, city, locality))
    .map((bank) => ({ ...bank, score: bank.city === city ? 2 : 0 }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const rankedPharmacies = [...pharmacies]
    .filter((pharmacy) => matchesLocation(pharmacy, state, district, city, locality))
    .map((pharmacy) => ({ ...pharmacy, score: getCityDistanceScore(pharmacy, city, locality) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  elements.emergencyHospitals.innerHTML = rankedHospitals
    .map(
      (hospital) => `
        <article class="emergency-card">
          <h4 class="card-title">${hospital.name}</h4>
          <p class="card-meta">${buildLocationLine(hospital)}</p>
          <div class="card-badges">
            <span class="badge status-good">${hospital.availableBeds} beds free</span>
            ${hospital.nearHighway ? `<span class="tag">${hospital.highway}</span>` : ""}
            ${isVerified(hospital) ? `<span class="badge verified-badge">Verified</span>` : ""}
          </div>
          <p class="resource-meta">${hospital.phone}</p>
          ${renderActionLinks(hospital)}
        </article>
      `
    )
    .join("") || renderEmpty("No emergency hospitals match this location yet.");

  elements.emergencyBloodbanks.innerHTML = rankedBloodbanks
    .map(
      (bank) => `
        <article class="emergency-card">
          <h4 class="card-title">${bank.name}</h4>
          <p class="card-meta">${uniqueValues([bank.city, bank.district, bank.state]).join(", ")}</p>
          <div class="card-badges">
            <span class="tag">${bank.open}</span>
            ${isVerified(bank) ? `<span class="badge verified-badge">Verified</span>` : ""}
          </div>
          <p class="resource-meta">${bank.phone}</p>
          ${renderActionLinks(bank)}
        </article>
      `
    )
    .join("") || renderEmpty("No emergency blood banks match this location yet.");

  elements.emergencyPharmacies.innerHTML = rankedPharmacies
    .map(
      (pharmacy) => `
        <article class="emergency-card">
          <h4 class="card-title">${pharmacy.name}</h4>
          <p class="card-meta">${buildLocationLine(pharmacy)}</p>
          <div class="card-badges">
            <span class="tag">${pharmacy.hours}</span>
            ${pharmacy.emergency ? `<span class="badge">Emergency ready</span>` : ""}
            ${isVerified(pharmacy) ? `<span class="badge verified-badge">Verified</span>` : ""}
          </div>
          <p class="resource-meta">${pharmacy.phone}</p>
          ${renderActionLinks(pharmacy)}
        </article>
      `
    )
    .join("") || renderEmpty("No emergency pharmacies match this location yet.");

  updateStickyEmergencyBar(rankedHospitals[0]);
}

function setFormMessage(form, message) {
  const output = form.querySelector(".form-message");
  output.textContent = message;
}

function syncQuickCityOptions() {
  fillCitySelect(elements.quickCity, elements.quickState.value, elements.quickDistrict.value, "All cities");
}

function syncEmergencyCityOptions() {
  fillCitySelect(elements.emergencyCity, elements.emergencyState.value, elements.emergencyDistrict.value, "Select city");

  if (elements.emergencyCity.value === "all") {
    const [firstCity] = getCitiesForScope(elements.emergencyState.value, elements.emergencyDistrict.value);

    if (firstCity) {
      elements.emergencyCity.value = firstCity;
    }
  }
}

function applyQuickLocation() {
  const state = elements.quickState.value;
  const district = elements.quickDistrict.value;
  const city = elements.quickCity.value;
  const locality = elements.quickLocality.value.trim();

  elements.directoryState.value = state;
  syncDirectoryDistrictOptions();
  if ([...elements.directoryDistrict.options].some((option) => option.value === district)) {
    elements.directoryDistrict.value = district;
  }
  syncDirectoryCityOptions();
  if ([...elements.directoryCity.options].some((option) => option.value === city)) {
    elements.directoryCity.value = city;
  }

  elements.hospitalState.value = state;
  syncHospitalDistrictOptions();
  if ([...elements.hospitalDistrict.options].some((option) => option.value === district)) {
    elements.hospitalDistrict.value = district;
  }
  elements.hospitalSearch.value = city === "all" ? "" : city;

  elements.medicineState.value = state;
  syncMedicineDistrictOptions();
  if ([...elements.medicineDistrict.options].some((option) => option.value === district)) {
    elements.medicineDistrict.value = district;
  }
  elements.medicineSearch.value = city === "all" ? "" : city;

  elements.diagnosticState.value = state;
  syncDiagnosticDistrictOptions();
  if ([...elements.diagnosticDistrict.options].some((option) => option.value === district)) {
    elements.diagnosticDistrict.value = district;
  }
  elements.diagnosticSearch.value = locality || (city === "all" ? "" : city);

  elements.emergencyState.value = state;
  syncEmergencyDistrictOptions();
  if ([...elements.emergencyDistrict.options].some((option) => option.value === district)) {
    elements.emergencyDistrict.value = district;
  }
  syncEmergencyCityOptions();
  if ([...elements.emergencyCity.options].some((option) => option.value === city)) {
    elements.emergencyCity.value = city;
  }
  elements.emergencyLocality.value = locality;

  renderQuickFinderStats();
  renderDirectory();
  renderHospitals();
  renderMedicine();
  renderDiagnostics();
  renderEmergencyResources();
}

function syncQuickDistrictOptions() {
  fillSelect(elements.quickDistrict, getDistrictsForState(elements.quickState.value), "All districts");
}

function syncDirectoryDistrictOptions() {
  fillSelect(elements.directoryDistrict, getDistrictsForState(elements.directoryState.value), "All districts");
}

function syncHospitalDistrictOptions() {
  fillSelect(elements.hospitalDistrict, getDistrictsForState(elements.hospitalState.value), "All districts");
}

function syncMedicineDistrictOptions() {
  fillSelect(elements.medicineDistrict, getDistrictsForState(elements.medicineState.value), "All districts");
}

function syncDiagnosticDistrictOptions() {
  fillSelect(elements.diagnosticDistrict, getDistrictsForState(elements.diagnosticState.value), "All districts");
}

function syncEmergencyDistrictOptions() {
  fillSelect(elements.emergencyDistrict, getDistrictsForState(elements.emergencyState.value), "All districts");
}

function syncRegistrationDistrictOptions() {
  fillSelect(elements.donorDistrict, getDistrictsForState(elements.donorState.value), "Select district", { placeholderValue: "" });
  fillSelect(elements.hospitalFormDistrict, getDistrictsForState(elements.hospitalFormState.value), "Select district", { placeholderValue: "" });
  fillSelect(elements.pharmacyFormDistrict, getDistrictsForState(elements.pharmacyFormState.value), "Select district", { placeholderValue: "" });
  fillSelect(elements.contactDistrict, getDistrictsForState(elements.contactState.value), "All districts (optional)", { placeholderValue: "" });
}

function refreshSelects() {
  const states = getStatesFromAllData();
  const bloodGroups = getUnique(donors, "blood");

  fillSelect(elements.directoryState, states, "All states");
  syncDirectoryDistrictOptions();
  syncDirectoryCityOptions();
  fillSelect(elements.directoryBlood, bloodGroups, "All blood groups");
  fillSelect(elements.hospitalState, getUnique(hospitals, "state"), "All states");
  syncHospitalDistrictOptions();
  fillSelect(elements.medicineState, getUnique(medicineInventory, "state"), "All states");
  syncMedicineDistrictOptions();
  fillSelect(elements.diagnosticState, getUnique(diagnostics, "state"), "All states");
  syncDiagnosticDistrictOptions();
  fillSelect(elements.quickState, states, "All states");
  syncQuickDistrictOptions();
  syncQuickCityOptions();
  fillSelect(elements.emergencyState, states, "All states");
  syncEmergencyDistrictOptions();
  fillSelect(elements.donorState, states, "Select state / UT", { placeholderValue: "" });
  fillSelect(elements.hospitalFormState, states, "Select state / UT", { placeholderValue: "" });
  fillSelect(elements.pharmacyFormState, states, "Select state / UT", { placeholderValue: "" });
  fillSelect(elements.contactState, states, "All states / UTs (optional)", { placeholderValue: "" });
  syncRegistrationDistrictOptions();

  if ((elements.emergencyState.value === "all" || !elements.emergencyState.value) && states.length) {
    elements.emergencyState.value = states.includes("Delhi") ? "Delhi" : states[0];
    syncEmergencyDistrictOptions();
  }

  syncEmergencyCityOptions();

  if ((elements.emergencyCity.value === "all" || !elements.emergencyCity.value) && [...elements.emergencyCity.options].some((option) => option.value === "Delhi")) {
    elements.emergencyCity.value = "Delhi";
  }

  renderQuickFinderStats();
}

function registerForms() {
  elements.donorForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const state = canonicalStateName(formData.get("state"));
      const district = canonicalDistrictName(formData.get("district"));
      const savedDonor = stampRecord(await persistRecord("donors", {
        name: titleCase(formData.get("name")),
        blood: formData.get("blood"),
        city: titleCase(formData.get("city")),
        district,
        state,
        phone: formData.get("phone").trim(),
        availability: "Newly registered"
      }));

      donors.unshift(savedDonor);
      addActivity("Donor", savedDonor.name, `${buildLocationLine(savedDonor)} donor registration added to verification queue.`);
      event.currentTarget.reset();
      refreshSelects();
      renderMetrics();
      renderDirectory();
      renderQuickFinderStats();
      renderOperations();
      updateSyncIndicators();
      setFormMessage(
        elements.donorForm,
        getPersistenceMessage(`Donor registered successfully and stored in the ${databaseMode} backend.`)
      );
    } catch (error) {
      setFormMessage(elements.donorForm, "Donor registration could not be saved. Please try again.");
    }
  });

  elements.hospitalForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const hasHighway = formData.get("highway").trim() !== "";
      const state = canonicalStateName(formData.get("state"));
      const district = canonicalDistrictName(formData.get("district"));
      const savedHospital = stampRecord(await persistRecord("hospitals", {
        name: titleCase(formData.get("name")),
        city: titleCase(formData.get("city")),
        district,
        state,
        phone: formData.get("phone").trim(),
        highway: hasHighway ? formData.get("highway").trim() : "City Access",
        nearHighway: hasHighway,
        services: ["Trauma", "ICU"],
        totalBeds: 120,
        availableBeds: 28,
        icuBeds: 8,
        ventilators: 4,
        locality: titleCase(formData.get("locality")) || "Recently added"
      }));

      hospitals.unshift(savedHospital);
      addActivity("Hospital", savedHospital.name, `${buildLocationLine(savedHospital)} partner intake submitted for ops review.`);
      event.currentTarget.reset();
      refreshSelects();
      renderMetrics();
      renderQuickFinderStats();
      renderHighwayHospitals();
      renderHospitals();
      renderEmergencySummary();
      renderEmergencyResources();
      renderOperations();
      updateSyncIndicators();
      setFormMessage(
        elements.hospitalForm,
        getPersistenceMessage(`Hospital partner registered in the ${databaseMode} backend.`)
      );
    } catch (error) {
      setFormMessage(elements.hospitalForm, "Hospital registration could not be saved. Please try again.");
    }
  });

  elements.pharmacyForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const state = canonicalStateName(formData.get("state"));
      const district = canonicalDistrictName(formData.get("district"));
      const savedPharmacy = stampRecord(await persistRecord("pharmacies", {
        name: titleCase(formData.get("name")),
        locality: titleCase(formData.get("locality")),
        city: titleCase(formData.get("city")),
        district,
        state,
        phone: formData.get("phone").trim(),
        hours: "24x7",
        emergency: true
      }));

      pharmacies.unshift(savedPharmacy);
      addActivity("Pharmacy", savedPharmacy.name, `${buildLocationLine(savedPharmacy)} pharmacy registration submitted for verification.`);
      event.currentTarget.reset();
      refreshSelects();
      renderQuickFinderStats();
      renderEmergencyResources();
      renderOperations();
      updateSyncIndicators();
      setFormMessage(
        elements.pharmacyForm,
        getPersistenceMessage(`Pharmacy registered in the ${databaseMode} backend.`)
      );
    } catch (error) {
      setFormMessage(elements.pharmacyForm, "Pharmacy registration could not be saved. Please try again.");
    }
  });

  elements.contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get("name").trim();
      const request = stampRecord(await persistRecord("contacts", {
        requestType: formData.get("requestType"),
        name,
        email: formData.get("email").trim(),
        organization: formData.get("organization").trim(),
        state: canonicalStateName(formData.get("state")),
        district: canonicalDistrictName(formData.get("district")),
        phone: formData.get("phone").trim(),
        message: formData.get("message").trim()
      }));

      partnerRequests.unshift(request);
      addActivity(
        "Partner Request",
        `${request.requestType} from ${name}`,
        `${request.organization || "Independent partner"} queued for email routing to ${emailRecipient}.`,
        "Queued for outreach"
      );

      event.currentTarget.reset();
      renderOperations();
      updateSyncIndicators();
      setFormMessage(
        elements.contactForm,
        backendAvailable
          ? `Thank you ${name}. Your request has been stored in the backend and prepared for email delivery to ${emailRecipient}.`
          : `Thank you ${name}. Your request is saved on this device and queued for ${emailRecipient}. Connect Vercel Blob and Resend to enable live backend delivery.`
      );
    } catch (error) {
      setFormMessage(elements.contactForm, "Your message could not be saved. Please try again.");
    }
  });
}

function registerFilters() {
  elements.quickState.addEventListener("change", () => {
    syncQuickDistrictOptions();
    syncQuickCityOptions();
    renderQuickFinderStats();
  });
  elements.quickDistrict.addEventListener("change", () => {
    syncQuickCityOptions();
    renderQuickFinderStats();
  });
  elements.quickCity.addEventListener("change", renderQuickFinderStats);
  elements.quickLocality.addEventListener("input", renderQuickFinderStats);
  elements.quickApply.addEventListener("click", applyQuickLocation);

  elements.directorySearch.addEventListener("input", renderDirectory);
  elements.directoryState.addEventListener("change", () => {
    syncDirectoryDistrictOptions();
    syncDirectoryCityOptions();
    renderDirectory();
  });
  elements.directoryDistrict.addEventListener("change", () => {
    syncDirectoryCityOptions();
    renderDirectory();
  });
  elements.directoryCity.addEventListener("change", renderDirectory);
  elements.directoryBlood.addEventListener("change", renderDirectory);

  elements.hospitalSearch.addEventListener("input", renderHospitals);
  elements.hospitalState.addEventListener("change", () => {
    syncHospitalDistrictOptions();
    renderHospitals();
  });
  elements.hospitalDistrict.addEventListener("change", renderHospitals);
  elements.hospitalService.addEventListener("change", renderHospitals);
  elements.highwayOnly.addEventListener("change", renderHospitals);

  elements.medicineSearch.addEventListener("input", renderMedicine);
  elements.medicineState.addEventListener("change", () => {
    syncMedicineDistrictOptions();
    renderMedicine();
  });
  elements.medicineDistrict.addEventListener("change", renderMedicine);
  elements.medicineStatus.addEventListener("change", renderMedicine);

  elements.diagnosticSearch.addEventListener("input", renderDiagnostics);
  elements.diagnosticState.addEventListener("change", () => {
    syncDiagnosticDistrictOptions();
    renderDiagnostics();
  });
  elements.diagnosticDistrict.addEventListener("change", renderDiagnostics);
  elements.diagnosticService.addEventListener("change", renderDiagnostics);

  elements.emergencyState.addEventListener("change", () => {
    syncEmergencyDistrictOptions();
    syncEmergencyCityOptions();
    renderEmergencyResources();
  });
  elements.emergencyDistrict.addEventListener("change", () => {
    syncEmergencyCityOptions();
    renderEmergencyResources();
  });
  elements.emergencyCity.addEventListener("change", renderEmergencyResources);
  elements.emergencyLocality.addEventListener("input", renderEmergencyResources);
  elements.emergencyButton.addEventListener("click", renderEmergencyResources);

  elements.donorState.addEventListener("change", () => {
    fillSelect(elements.donorDistrict, getDistrictsForState(elements.donorState.value), "Select district", { placeholderValue: "" });
  });
  elements.hospitalFormState.addEventListener("change", () => {
    fillSelect(elements.hospitalFormDistrict, getDistrictsForState(elements.hospitalFormState.value), "Select district", { placeholderValue: "" });
  });
  elements.pharmacyFormState.addEventListener("change", () => {
    fillSelect(elements.pharmacyFormDistrict, getDistrictsForState(elements.pharmacyFormState.value), "Select district", { placeholderValue: "" });
  });
  elements.contactState.addEventListener("change", () => {
    fillSelect(elements.contactDistrict, getDistrictsForState(elements.contactState.value), "All districts (optional)", { placeholderValue: "" });
  });
}

function registerNav() {
  elements.menuToggle.addEventListener("click", () => {
    const open = elements.nav.classList.toggle("is-open");
    elements.menuToggle.setAttribute("aria-expanded", String(open));
  });

  elements.nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      elements.nav.classList.remove("is-open");
      elements.menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function simulateHospitalFeed() {
  const now = new Date();
  elements.hospitalSync.textContent = `Live feed updated ${formatTimeOnly(now)}`;

  hospitals.forEach((hospital) => {
    const change = Math.floor(Math.random() * 7) - 3;
    hospital.availableBeds = Math.max(6, Math.min(hospital.totalBeds - 6, hospital.availableBeds + change));
    hospital.icuBeds = Math.max(2, Math.min(25, hospital.icuBeds + (Math.random() > 0.7 ? 1 : 0)));
    hospital.updatedAt = now.toISOString();
  });

  renderHighwayHospitals();
  renderHospitals();
  renderEmergencySummary();
  renderEmergencyResources();
  renderQuickFinderStats();
  updateSyncIndicators();
}

async function init() {
  await loadIndiaLocationDirectory();
  prepareSeedData();
  await syncBackendData();

  addActivity(
    "System",
    `${BRAND_NAME} network synced`,
    `Directories are live across India. Data mode: ${databaseMode}. Email mode: ${emailMode}.`,
    backendAvailable ? "Backend connected" : apiReachable ? "Local fallback" : "Offline fallback"
  );

  refreshSelects();
  renderMetrics();
  updateSyncIndicators();
  renderQuickFinderStats();
  renderEmergencySummary();
  renderDirectory();
  renderHighwayHospitals();
  renderHospitals();
  renderMedicine();
  renderDiagnostics();
  renderEmergencyResources();
  renderOperations();
  registerForms();
  registerFilters();
  registerNav();

  setInterval(simulateHospitalFeed, 15000);
}

init();
