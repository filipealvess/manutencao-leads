import React, { useEffect, useState } from 'react';
import LeadsList from '../LeadsList';
import LeadsGridWrapper from './styles';
import { getLeads } from '../../controllers/leadController';

export default function LeadsGrid({ onSelectLead }) {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const savedLeads = getLeads();

    if (savedLeads) {
      setLeads(savedLeads);
    }
  }, []);

  return (
    <LeadsGridWrapper>
      <LeadsList
        title="Cliente em Potencial"
        items={leads.potential}
        onClick={lead => onSelectLead(lead, 'Cliente em Potencial')}
      />

      <LeadsList
        title="Dados Confirmados"
        items={leads.confirmedData}
        onClick={lead => onSelectLead(lead, 'Dados Confirmados')}
      />

      <LeadsList
        title="Reunião Agendada"
        itemsAreBlocked
        items={leads.scheduledMeeting}
        onClick={lead => onSelectLead(lead, 'Reunião Agendada')}
      />
    </LeadsGridWrapper>
  );
}
