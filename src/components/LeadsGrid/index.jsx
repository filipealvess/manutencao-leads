import React from 'react';
import LeadsList from '../LeadsList';
import LeadsGridWrapper from './styles';

export default function LeadsGrid() {
  return (
    <LeadsGridWrapper>
      <LeadsList title="Cliente em Potencial" />
      <LeadsList title="Dados Confirmados" />
      <LeadsList title="Reunião Agendada" itemsAreBlocked />
    </LeadsGridWrapper>
  );
}
