import React from 'react';
import LeadsList from '../LeadsList';
import LeadsGridWrapper from './styles';

export default function LeadsGrid({ leads, onSelectLead }) {
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
