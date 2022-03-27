const LEADS_STRUCTURE = {
  potential: [],
  scheduledMeeting: [],
  confirmedData: []
};

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

  localStorage.setItem('leads', JSON.stringify(leads));
}

export function getLeads() {
  return JSON.parse(localStorage.getItem('leads'));
}
