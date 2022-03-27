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

export function save(lead) {
  const savedLeads = getAll();
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

export function getAll() {
  return JSON.parse(localStorage.getItem('leads'));
}

export function updateStatus(leadEmail, currentStatus) {
  const savedLeads = getAll();
  const currentLead = getCurrentLead(savedLeads, leadEmail, currentStatus);
  const nextStatus = (currentStatus === 'Cliente em Potencial') ? 'Dados Confirmados' : 'Reunião Agendada';
  const newLeads = { ...savedLeads };

  newLeads[STATUS_LIST[currentStatus]] = getRemainingLeads(savedLeads, leadEmail, currentStatus);
  newLeads[STATUS_LIST[nextStatus]] = [ currentLead, ...savedLeads[STATUS_LIST[nextStatus]] ];

  updateAllLeads(newLeads);
}

export function remove(leadEmail, leadStatus) {
  const savedLeads = getAll();
  const remainingLeads = getRemainingLeads(savedLeads, leadEmail, leadStatus);
  const newLeads = { ...savedLeads };

  newLeads[STATUS_LIST[leadStatus]] = remainingLeads;

  updateAllLeads(newLeads);
}
