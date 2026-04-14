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
  { name: "AIIMS Trauma Centre", city: "Delhi", state: "Delhi", phone: "011-2659-4444", highway: "NH 48", nearHighway: true, services: ["Trauma", "ICU", "Cardiac"], totalBeds: 180, availableBeds: 44, icuBeds: 12, ventilators: 9, locality: "Ansari Nagar" },
  { name: "Kokilaben Emergency Hospital", city: "Mumbai", state: "Maharashtra", phone: "022-4269-6969", highway: "Western Express Highway", nearHighway: true, services: ["Trauma", "Burns", "ICU"], totalBeds: 220, availableBeds: 38, icuBeds: 10, ventilators: 6, locality: "Andheri West" },
  { name: "Manipal Old Airport Road", city: "Bengaluru", state: "Karnataka", phone: "080-2502-4444", highway: "NH 44", nearHighway: true, services: ["Cardiac", "ICU", "Trauma"], totalBeds: 250, availableBeds: 61, icuBeds: 18, ventilators: 11, locality: "Domlur" },
  { name: "Yashoda Super Speciality", city: "Hyderabad", state: "Telangana", phone: "040-4567-4567", highway: "NH 65", nearHighway: true, services: ["Cardiac", "ICU", "Burns"], totalBeds: 210, availableBeds: 48, icuBeds: 15, ventilators: 10, locality: "Somajiguda" },
  { name: "Ruby Hall Clinic", city: "Pune", state: "Maharashtra", phone: "020-6645-5100", highway: "Pune-Solapur Road", nearHighway: false, services: ["ICU", "Cardiac"], totalBeds: 190, availableBeds: 52, icuBeds: 14, ventilators: 8, locality: "Sassoon Road" },
  { name: "Medanta Emergency Institute", city: "Gurugram", state: "Haryana", phone: "0124-4141-414", highway: "NH 48", nearHighway: true, services: ["Trauma", "Cardiac", "ICU"], totalBeds: 300, availableBeds: 74, icuBeds: 20, ventilators: 14, locality: "Sector 38" }
];

const medicineInventory = [
  { medicine: "Meropenem 1g", company: "Sun Pharma", city: "Delhi", state: "Delhi", status: "In Stock", stock: "1,280 vials", eta: "Dispatch in 3 hrs" },
  { medicine: "Insulin Glargine", company: "Lupin", city: "Mumbai", state: "Maharashtra", status: "Restocking", stock: "Restock 480 pens", eta: "ETA 8 hrs" },
  { medicine: "Doxorubicin", company: "Dr. Reddy's", city: "Hyderabad", state: "Telangana", status: "In Stock", stock: "720 units", eta: "Dispatch in 2 hrs" },
  { medicine: "Amoxicillin 625", company: "Cipla", city: "Bengaluru", state: "Karnataka", status: "In Stock", stock: "14,000 strips", eta: "Dispatch in 6 hrs" },
  { medicine: "IV Normal Saline", company: "Abbott", city: "Ahmedabad", state: "Gujarat", status: "Critical", stock: "180 bags", eta: "Priority allocation needed" },
  { medicine: "Paracetamol IV", company: "Mankind", city: "Jaipur", state: "Rajasthan", status: "Restocking", stock: "640 bottles", eta: "ETA 5 hrs" }
];

const diagnostics = [
  { name: "Metro Imaging Centre", city: "Delhi", state: "Delhi", locality: "Karol Bagh", services: ["X-Ray", "CT", "Pathology"], hours: "24x7", rating: "4.8/5" },
  { name: "Precision Diagnostics", city: "Mumbai", state: "Maharashtra", locality: "Dadar", services: ["X-Ray", "MRI", "Pathology"], hours: "6am - 11pm", rating: "4.7/5" },
  { name: "Aster Scan Hub", city: "Bengaluru", state: "Karnataka", locality: "Indiranagar", services: ["MRI", "CT", "X-Ray"], hours: "24x7", rating: "4.9/5" },
  { name: "Mediscan Labs", city: "Hyderabad", state: "Telangana", locality: "Banjara Hills", services: ["X-Ray", "Pathology"], hours: "24x7", rating: "4.6/5" },
  { name: "Lifeline Diagnostics", city: "Jaipur", state: "Rajasthan", locality: "Malviya Nagar", services: ["CT", "Pathology", "X-Ray"], hours: "7am - 10pm", rating: "4.7/5" },
  { name: "CarePath Labs", city: "Kochi", state: "Kerala", locality: "Edappally", services: ["Pathology", "MRI"], hours: "24x7", rating: "4.8/5" }
];

const pharmacies = [
  { name: "MediCare Pharmacy", locality: "Ansari Nagar", city: "Delhi", state: "Delhi", phone: "011-4555-8080", hours: "24x7", emergency: true },
  { name: "Lifeline Drugs", locality: "Andheri West", city: "Mumbai", state: "Maharashtra", phone: "022-4800-1212", hours: "24x7", emergency: true },
  { name: "BlueCross Pharmacy", locality: "Domlur", city: "Bengaluru", state: "Karnataka", phone: "080-4100-5555", hours: "24x7", emergency: true },
  { name: "CityMed Pharmacy", locality: "Somajiguda", city: "Hyderabad", state: "Telangana", phone: "040-6100-7777", hours: "24x7", emergency: true },
  { name: "RapidCare Pharmacy", locality: "Kaloor", city: "Kochi", state: "Kerala", phone: "0484-290-9090", hours: "24x7", emergency: true },
  { name: "Redline Pharmacy", locality: "Karol Bagh", city: "Delhi", state: "Delhi", phone: "011-4789-5500", hours: "6am - 12am", emergency: false }
];

const coverage = [
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

const elements = {
  nav: document.querySelector('.site-nav'),
  menuToggle: document.querySelector('.menu-toggle'),
  metricDonors: document.querySelector('#metric-donors'),
  metricHospitals: document.querySelector('#metric-hospitals'),
  metricBloodbanks: document.querySelector('#metric-bloodbanks'),
  metricLabs: document.querySelector('#metric-labs'),
  emergencySummary: document.querySelector('#emergency-summary'),
  directorySearch: document.querySelector('#directory-search'),
  directoryState: document.querySelector('#directory-state'),
  directoryCity: document.querySelector('#directory-city'),
  directoryBlood: document.querySelector('#directory-blood'),
  donorList: document.querySelector('#donor-list'),
  donorCount: document.querySelector('#donor-count'),
  bloodbankList: document.querySelector('#bloodbank-list'),
  bloodbankCount: document.querySelector('#bloodbank-count'),
  hospitalSearch: document.querySelector('#hospital-search'),
  hospitalState: document.querySelector('#hospital-state'),
  hospitalService: document.querySelector('#hospital-service'),
  highwayOnly: document.querySelector('#highway-only'),
  hospitalGrid: document.querySelector('#hospital-grid'),
  highwayHospitals: document.querySelector('#highway-hospitals'),
  hospitalSync: document.querySelector('#hospital-sync'),
  medicineSearch: document.querySelector('#medicine-search'),
  medicineState: document.querySelector('#medicine-state'),
  medicineStatus: document.querySelector('#medicine-status'),
  medicineGrid: document.querySelector('#medicine-grid'),
  diagnosticSearch: document.querySelector('#diagnostic-search'),
  diagnosticState: document.querySelector('#diagnostic-state'),
  diagnosticService: document.querySelector('#diagnostic-service'),
  diagnosticGrid: document.querySelector('#diagnostic-grid'),
  emergencyCity: document.querySelector('#emergency-city'),
  emergencyLocality: document.querySelector('#emergency-locality'),
  emergencyButton: document.querySelector('#emergency-button'),
  emergencyHospitals: document.querySelector('#emergency-hospitals'),
  emergencyBloodbanks: document.querySelector('#emergency-bloodbanks'),
  emergencyPharmacies: document.querySelector('#emergency-pharmacies'),
  donorForm: document.querySelector('#donor-form'),
  hospitalForm: document.querySelector('#hospital-form'),
  pharmacyForm: document.querySelector('#pharmacy-form'),
  contactForm: document.querySelector('#contact-form')
};

function titleCase(value) {
  return value.trim().split(/\s+/).map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()).join(' ');
}

function getUnique(items, key) {
  return [...new Set(items.map((item) => item[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function fillSelect(select, values, placeholder) {
  const current = select.value;
  select.innerHTML = '';
  const first = document.createElement('option');
  first.value = 'all';
  first.textContent = placeholder;
  select.appendChild(first);
  values.forEach((value) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  }
}

function renderEmpty(message) {
  return `<div class="empty-state">${message}</div>`;
}

function addIndiaCoverage() {
  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  const donorNames = ['Ananya', 'Rahul', 'Neha', 'Arjun', 'Diya', 'Karan', 'Ishita', 'Mohit'];
  const donorSurnames = ['Sharma', 'Patel', 'Rao', 'Singh', 'Das', 'Nair', 'Reddy', 'Joseph'];
  const medOptions = [
    { company: 'Sun Pharma', medicine: 'Meropenem 1g', status: 'In Stock' },
    { company: 'Cipla', medicine: 'Amoxicillin 625', status: 'In Stock' },
    { company: "Dr. Reddy's", medicine: 'Doxorubicin', status: 'Restocking' },
    { company: 'Lupin', medicine: 'Insulin Glargine', status: 'In Stock' },
    { company: 'Abbott', medicine: 'IV Normal Saline', status: 'Critical' },
    { company: 'Mankind', medicine: 'Paracetamol IV', status: 'Restocking' }
  ];
  coverage.forEach((region, index) => {
    const blood = bloodGroups[index % bloodGroups.length];
    donors.push({
      name: `${donorNames[index % donorNames.length]} ${donorSurnames[index % donorSurnames.length]}`,
      blood,
      city: region.city,
      state: region.state,
      phone: `+91 88${String(10000000 + index * 379).padStart(8, '0')}`,
      availability: index % 2 === 0 ? 'Available today' : 'Verified repeat donor'
    });
    bloodBanks.push({
      name: `${region.city} Regional Blood Bank`,
      city: region.city,
      state: region.state,
      phone: `0${String(1100000000 + index * 117).slice(0, 10)}`,
      stock: `${blood}, O+, Platelets`,
      open: index % 4 === 0 ? '6am - 11pm' : '24x7'
    });
    hospitals.push({
      name: `${region.city} State Emergency Hospital`,
      city: region.city,
      state: region.state,
      phone: `0${String(2200000000 + index * 133).slice(0, 10)}`,
      highway: region.highway,
      nearHighway: index % 5 !== 0,
      services: index % 2 === 0 ? ['Trauma', 'ICU', 'Cardiac'] : ['Trauma', 'Burns', 'ICU'],
      totalBeds: 140 + (index % 5) * 20,
      availableBeds: 24 + (index % 7) * 6,
      icuBeds: 6 + (index % 5) * 2,
      ventilators: 4 + (index % 4),
      locality: region.locality
    });
    const med = medOptions[index % medOptions.length];
    medicineInventory.push({
      medicine: med.medicine,
      company: med.company,
      city: region.city,
      state: region.state,
      status: med.status,
      stock: `${300 + index * 22} units`,
      eta: med.status === 'Critical' ? 'Priority allocation needed' : `Dispatch in ${1 + (index % 6)} hrs`
    });
    diagnostics.push({
      name: `${region.city} Advanced Diagnostics`,
      city: region.city,
      state: region.state,
      locality: region.locality,
      services: index % 2 === 0 ? ['X-Ray', 'CT', 'Pathology'] : ['MRI', 'CT', 'X-Ray'],
      hours: index % 3 === 0 ? '24x7' : '7am - 10pm',
      rating: `${(4.5 + (index % 4) * 0.1).toFixed(1)}/5`
    });
    pharmacies.push({
      name: `${region.city} Emergency Pharmacy`,
      locality: region.locality,
      city: region.city,
      state: region.state,
      phone: `0${String(3300000000 + index * 155).slice(0, 10)}`,
      hours: '24x7',
      emergency: true
    });
  });
}

function renderMetrics() {
  elements.metricDonors.textContent = String(donors.length).padStart(2, '0');
  elements.metricHospitals.textContent = String(hospitals.length).padStart(2, '0');
  elements.metricBloodbanks.textContent = String(bloodBanks.length).padStart(2, '0');
  elements.metricLabs.textContent = String(diagnostics.length).padStart(2, '0');
}

function renderEmergencySummary() {
  const priority = hospitals.filter((hospital) => hospital.nearHighway).slice(0, 3);
  elements.emergencySummary.innerHTML = priority.map((hospital) => `
    <div class="alert-item">
      <div>
        <strong>${hospital.name}</strong>
        <div class="resource-meta">${hospital.city} emergency corridor</div>
      </div>
      <span class="badge">${hospital.availableBeds} beds free</span>
    </div>
  `).join('');
}

function syncDirectoryCityOptions() {
  const state = elements.directoryState.value;
  const source = [...donors, ...bloodBanks].filter((item) => state === 'all' || item.state === state);
  fillSelect(elements.directoryCity, getUnique(source, 'city'), 'All cities');
}

function renderDirectory() {
  const query = elements.directorySearch.value.trim().toLowerCase();
  const state = elements.directoryState.value;
  const city = elements.directoryCity.value;
  const blood = elements.directoryBlood.value;
  const donorResults = donors.filter((item) => {
    const matchesQuery = [item.name, item.city, item.state].some((field) => field.toLowerCase().includes(query));
    return matchesQuery && (state === 'all' || item.state === state) && (city === 'all' || item.city === city) && (blood === 'all' || item.blood === blood);
  });
  const bankResults = bloodBanks.filter((item) => {
    const matchesQuery = [item.name, item.city, item.state].some((field) => field.toLowerCase().includes(query));
    return matchesQuery && (state === 'all' || item.state === state) && (city === 'all' || item.city === city) && (blood === 'all' || item.stock.includes(blood));
  });
  elements.donorCount.textContent = `${donorResults.length} results`;
  elements.bloodbankCount.textContent = `${bankResults.length} results`;
  elements.donorList.innerHTML = donorResults.length ? donorResults.map((item) => `
    <article class="directory-card">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-meta">${item.city}, ${item.state}</p>
      <div class="card-badges"><span class="badge">${item.blood}</span><span class="tag">${item.availability}</span></div>
      <p class="resource-meta">Contact: ${item.phone}</p>
    </article>
  `).join('') : renderEmpty('No donors match the current filters.');
  elements.bloodbankList.innerHTML = bankResults.length ? bankResults.map((item) => `
    <article class="bloodbank-card">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-meta">${item.city}, ${item.state}</p>
      <div class="card-badges"><span class="tag">${item.open}</span><span class="badge">${item.stock}</span></div>
      <p class="resource-meta">Contact: ${item.phone}</p>
    </article>
  `).join('') : renderEmpty('No blood banks match the current filters.');
}

function renderHighwayHospitals() {
  elements.highwayHospitals.innerHTML = hospitals.filter((hospital) => hospital.nearHighway).slice(0, 4).map((hospital) => `
    <article class="highway-card">
      <h4 class="resource-name">${hospital.name}</h4>
      <p class="resource-meta">${hospital.city}, ${hospital.state}</p>
      <div class="tag-row"><span class="badge">${hospital.highway}</span><span class="tag">${hospital.availableBeds} beds open</span></div>
    </article>
  `).join('');
}

function getHospitalStatus(hospital) {
  const occupancy = 1 - hospital.availableBeds / hospital.totalBeds;
  if (occupancy >= 0.82) return { label: 'High load', className: 'status-critical' };
  if (occupancy >= 0.65) return { label: 'Monitoring', className: 'status-watch' };
  return { label: 'Stable capacity', className: 'status-good' };
}

function renderHospitals() {
  const query = elements.hospitalSearch.value.trim().toLowerCase();
  const state = elements.hospitalState.value;
  const service = elements.hospitalService.value;
  const highwayOnly = elements.highwayOnly.checked;
  const results = hospitals.filter((hospital) => {
    const matchesQuery = [hospital.name, hospital.city, hospital.state].some((field) => field.toLowerCase().includes(query));
    return matchesQuery && (state === 'all' || hospital.state === state) && (service === 'all' || hospital.services.includes(service)) && (!highwayOnly || hospital.nearHighway);
  });
  elements.hospitalGrid.innerHTML = results.length ? results.map((hospital) => {
    const status = getHospitalStatus(hospital);
    const occupied = Math.round(((hospital.totalBeds - hospital.availableBeds) / hospital.totalBeds) * 100);
    return `
      <article class="hospital-card">
        <div class="hospital-top">
          <div>
            <h3>${hospital.name}</h3>
            <p class="hospital-meta">${hospital.locality}, ${hospital.city}, ${hospital.state}</p>
          </div>
          <strong class="${status.className}">${status.label}</strong>
        </div>
        <div class="tag-row">${hospital.services.map((item) => `<span class="tag">${item}</span>`).join('')}${hospital.nearHighway ? `<span class="badge">${hospital.highway}</span>` : ''}</div>
        <div class="capacity-grid">
          <div class="capacity-item"><strong>${hospital.availableBeds}</strong><span>Beds free</span></div>
          <div class="capacity-item"><strong>${hospital.icuBeds}</strong><span>ICU beds</span></div>
          <div class="capacity-item"><strong>${hospital.ventilators}</strong><span>Ventilators</span></div>
        </div>
        <div>
          <div class="resource-meta">Occupied ${occupied}% of ${hospital.totalBeds} total beds</div>
          <div class="bed-bar"><div class="bed-fill" style="width:${occupied}%"></div></div>
        </div>
        <p class="resource-meta">Emergency contact: ${hospital.phone}</p>
      </article>
    `;
  }).join('') : renderEmpty('No hospitals match the current filters.');
}

function renderMedicine() {
  const query = elements.medicineSearch.value.trim().toLowerCase();
  const state = elements.medicineState.value;
  const status = elements.medicineStatus.value;
  const results = medicineInventory.filter((item) => {
    const matchesQuery = [item.medicine, item.company, item.city].some((field) => field.toLowerCase().includes(query));
    return matchesQuery && (state === 'all' || item.state === state) && (status === 'all' || item.status === status);
  });
  elements.medicineGrid.innerHTML = results.length ? results.map((item) => `
    <article class="medicine-card">
      <h3 class="resource-name">${item.medicine}</h3>
      <p class="resource-meta">${item.company} - ${item.city}, ${item.state}</p>
      <div class="tag-row"><span class="badge">${item.status}</span><span class="tag">${item.stock}</span></div>
      <p class="resource-meta">${item.eta}</p>
    </article>
  `).join('') : renderEmpty('No medicine supply records match the current filters.');
}

function renderDiagnostics() {
  const query = elements.diagnosticSearch.value.trim().toLowerCase();
  const state = elements.diagnosticState.value;
  const service = elements.diagnosticService.value;
  const results = diagnostics.filter((item) => {
    const matchesQuery = [item.name, item.locality, item.city].some((field) => field.toLowerCase().includes(query));
    return matchesQuery && (state === 'all' || item.state === state) && (service === 'all' || item.services.includes(service));
  });
  elements.diagnosticGrid.innerHTML = results.length ? results.map((item) => `
    <article class="diagnostic-card">
      <h3 class="resource-name">${item.name}</h3>
      <p class="diagnostic-meta">${item.locality}, ${item.city}, ${item.state}</p>
      <div class="tag-row">${item.services.map((entry) => `<span class="tag">${entry}</span>`).join('')}</div>
      <p class="resource-meta">Hours: ${item.hours}</p>
      <p class="resource-meta">Rating: ${item.rating}</p>
    </article>
  `).join('') : renderEmpty('No diagnostic centers match the current filters.');
}

function distanceScore(item, city, locality) {
  let score = item.city === city ? 2 : 0;
  if (locality && item.locality && item.locality.toLowerCase().includes(locality)) score += 2;
  if (item.nearHighway) score += 1;
  if (item.emergency) score += 1;
  return score;
}

function renderEmergencyResources() {
  const city = elements.emergencyCity.value;
  const locality = elements.emergencyLocality.value.trim().toLowerCase();
  const rankedHospitals = [...hospitals].map((item) => ({ ...item, score: distanceScore(item, city, locality) })).sort((a, b) => b.score - a.score || b.availableBeds - a.availableBeds).slice(0, 3);
  const rankedBloodbanks = [...bloodBanks].map((item) => ({ ...item, score: item.city === city ? 2 : 0 })).sort((a, b) => b.score - a.score).slice(0, 3);
  const rankedPharmacies = [...pharmacies].map((item) => ({ ...item, score: distanceScore(item, city, locality) })).sort((a, b) => b.score - a.score).slice(0, 3);
  elements.emergencyHospitals.innerHTML = rankedHospitals.map((item) => `
    <article class="emergency-card">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-meta">${item.locality}, ${item.city}</p>
      <div class="card-badges"><span class="badge">${item.availableBeds} beds free</span>${item.nearHighway ? `<span class="tag">${item.highway}</span>` : ''}</div>
      <p class="resource-meta">${item.phone}</p>
    </article>
  `).join('');
  elements.emergencyBloodbanks.innerHTML = rankedBloodbanks.map((item) => `
    <article class="emergency-card">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-meta">${item.city}, ${item.state}</p>
      <div class="card-badges"><span class="tag">${item.open}</span></div>
      <p class="resource-meta">${item.phone}</p>
    </article>
  `).join('');
  elements.emergencyPharmacies.innerHTML = rankedPharmacies.map((item) => `
    <article class="emergency-card">
      <h4 class="card-title">${item.name}</h4>
      <p class="card-meta">${item.locality}, ${item.city}</p>
      <div class="card-badges"><span class="tag">${item.hours}</span>${item.emergency ? '<span class="badge">Emergency ready</span>' : ''}</div>
      <p class="resource-meta">${item.phone}</p>
    </article>
  `).join('');
}

function setFormMessage(form, message) {
  const output = form.querySelector('.form-message');
  output.textContent = message;
}

function refreshSelects() {
  const stateSources = [...donors, ...bloodBanks, ...hospitals, ...medicineInventory, ...diagnostics, ...pharmacies];
  const citySources = [...donors, ...bloodBanks, ...hospitals, ...diagnostics, ...pharmacies];
  fillSelect(elements.directoryState, getUnique(stateSources, 'state'), 'All states');
  syncDirectoryCityOptions();
  fillSelect(elements.directoryBlood, getUnique(donors, 'blood'), 'All blood groups');
  fillSelect(elements.hospitalState, getUnique(hospitals, 'state'), 'All states');
  fillSelect(elements.medicineState, getUnique(medicineInventory, 'state'), 'All states');
  fillSelect(elements.diagnosticState, getUnique(diagnostics, 'state'), 'All states');
  fillSelect(elements.emergencyCity, getUnique(citySources, 'city'), 'Select city');
  if (elements.emergencyCity.value === 'all' && elements.emergencyCity.options.length > 1) {
    elements.emergencyCity.value = elements.emergencyCity.options[1].value;
  }
}

function registerForms() {
  elements.donorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    donors.unshift({
      name: titleCase(formData.get('name')),
      blood: formData.get('blood'),
      city: titleCase(formData.get('city')),
      state: titleCase(formData.get('state')),
      phone: formData.get('phone').trim(),
      availability: 'Newly registered'
    });
    event.currentTarget.reset();
    refreshSelects();
    renderMetrics();
    renderDirectory();
    setFormMessage(elements.donorForm, 'Donor added to the live site view. Production database wiring can be connected next.');
  });

  elements.hospitalForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const hasHighway = formData.get('highway').trim() !== '';
    hospitals.unshift({
      name: titleCase(formData.get('name')),
      city: titleCase(formData.get('city')),
      state: titleCase(formData.get('state')),
      phone: formData.get('phone').trim(),
      highway: hasHighway ? formData.get('highway').trim() : 'City Access',
      nearHighway: hasHighway,
      services: ['Trauma', 'ICU'],
      totalBeds: 120,
      availableBeds: 28,
      icuBeds: 8,
      ventilators: 4,
      locality: 'Recently added'
    });
    event.currentTarget.reset();
    refreshSelects();
    renderMetrics();
    renderHighwayHospitals();
    renderHospitals();
    renderEmergencySummary();
    renderEmergencyResources();
    setFormMessage(elements.hospitalForm, 'Hospital partner added to the live site view.');
  });

  elements.pharmacyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    pharmacies.unshift({
      name: titleCase(formData.get('name')),
      locality: titleCase(formData.get('locality')),
      city: titleCase(formData.get('city')),
      state: titleCase(formData.get('state')),
      phone: formData.get('phone').trim(),
      hours: '24x7',
      emergency: true
    });
    event.currentTarget.reset();
    refreshSelects();
    renderEmergencyResources();
    setFormMessage(elements.pharmacyForm, 'Pharmacy added to the live site view.');
  });

  elements.contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name').trim();
    event.currentTarget.reset();
    setFormMessage(elements.contactForm, `Thank you ${name}. Your partner request has been captured in this live version.`);
  });
}

function registerFilters() {
  elements.directorySearch.addEventListener('input', renderDirectory);
  elements.directoryState.addEventListener('change', () => { syncDirectoryCityOptions(); renderDirectory(); });
  elements.directoryCity.addEventListener('change', renderDirectory);
  elements.directoryBlood.addEventListener('change', renderDirectory);
  elements.hospitalSearch.addEventListener('input', renderHospitals);
  elements.hospitalState.addEventListener('change', renderHospitals);
  elements.hospitalService.addEventListener('change', renderHospitals);
  elements.highwayOnly.addEventListener('change', renderHospitals);
  elements.medicineSearch.addEventListener('input', renderMedicine);
  elements.medicineState.addEventListener('change', renderMedicine);
  elements.medicineStatus.addEventListener('change', renderMedicine);
  elements.diagnosticSearch.addEventListener('input', renderDiagnostics);
  elements.diagnosticState.addEventListener('change', renderDiagnostics);
  elements.diagnosticService.addEventListener('change', renderDiagnostics);
  elements.emergencyButton.addEventListener('click', renderEmergencyResources);
}

function registerNav() {
  elements.menuToggle.addEventListener('click', () => {
    const open = elements.nav.classList.toggle('is-open');
    elements.menuToggle.setAttribute('aria-expanded', String(open));
  });
  elements.nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      elements.nav.classList.remove('is-open');
      elements.menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

function simulateHospitalFeed() {
  const now = new Date();
  elements.hospitalSync.textContent = `Live feed updated ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  hospitals.forEach((hospital) => {
    const delta = Math.floor(Math.random() * 7) - 3;
    hospital.availableBeds = Math.max(6, Math.min(hospital.totalBeds - 6, hospital.availableBeds + delta));
  });
  renderHighwayHospitals();
  renderHospitals();
  renderEmergencySummary();
  renderEmergencyResources();
}

function init() {
  addIndiaCoverage();
  refreshSelects();
  renderMetrics();
  renderEmergencySummary();
  renderDirectory();
  renderHighwayHospitals();
  renderHospitals();
  renderMedicine();
  renderDiagnostics();
  renderEmergencyResources();
  registerForms();
  registerFilters();
  registerNav();
  setInterval(simulateHospitalFeed, 15000);
}

init();
