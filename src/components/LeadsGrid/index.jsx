import React, { useEffect, useState } from 'react';
import LeadsList from '../LeadsList';
import LeadsGridWrapper from './styles';
import { getLeads } from '../../controllers/leadController';

export default function LeadsGrid() {
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
      />

      <LeadsList
        title="Dados Confirmados"
        items={leads.confirmedData}
      />

      <LeadsList
        title="Reunião Agendada"
        itemsAreBlocked
        items={leads.scheduledMeeting}
      />
    </LeadsGridWrapper>
  );
}
