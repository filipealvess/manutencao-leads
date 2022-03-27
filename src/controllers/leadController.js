const LEADS_STRUCTURE = {
  potential: [],
  scheduledMeeting: [],
  confirmedData: []
};

const STATUS_LIST = {
  'Cliente em Potencial': 'potential',
  'Reunião Agendada': 'scheduledMeeting',
  'Dados Confirmados': 'confirmedData'
};

function updateAllLeads(newLeads) {
  localStorage.setItem('leads', JSON.stringify(newLeads));
}

function getCurrentLead(savedLeads, leadEmail, status) {
  return savedLeads[STATUS_LIST[status]]
    .filter(lead => lead.email === leadEmail)[0];
}
function getRemainingLeads(savedLeads, leadEmail, status) {
  return savedLeads[STATUS_LIST[status]]
    .filter(lead => lead.email !== leadEmail);
}

export function saveLead(lead) {
  const savedLeads = getLeads();
  let leads = {};
  
  if (savedLeads) {
    savedLeads.potential.unshift(lead);
    leads = { ...savedLeads };
  } else {
    leads = { ...LEADS_STRUCTURE };
    leads.potential.unshift(lead);
  }

  updateAllLeads(leads);
}

export function getLeads() {
  return JSON.parse(localStorage.getItem('leads'));
}

export function updateLeadStatus(leadEmail, currentStatus) {
  const savedLeads = getLeads();
  const currentLead = getCurrentLead(savedLeads, leadEmail, currentStatus);
  const nextStatus = (currentStatus === 'Cliente em Potencial') ? 'Dados Confirmados' : 'Reunião Agendada';
  const newLeads = { ...savedLeads };

  newLeads[STATUS_LIST[currentStatus]] = getRemainingLeads(savedLeads, leadEmail, currentStatus);
  newLeads[STATUS_LIST[nextStatus]] = [ currentLead, ...savedLeads[STATUS_LIST[nextStatus]] ];

  updateAllLeads(newLeads);
}
