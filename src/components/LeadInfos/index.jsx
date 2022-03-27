import React from 'react';
import { ArrowUp } from 'react-feather';
import IconButton from '../IconButton';
import LeadInfosWrapper, { Name, Value } from './styles';

export default function LeadInfos({ lead, updateStatus }) {
  return (
    <LeadInfosWrapper>
      <div>
        <Name>Nome:</Name>
        <Value>{lead.name}</Value>
      </div>
      
      <div>
        <Name>E-mail:</Name>
        <Value>{lead.email}</Value>
      </div>

      <div>
        <Name>Telefone:</Name>
        <Value>{lead.phone}</Value>
      </div>

      <div>
        <Name>Status:</Name>
        <Value>
          {lead.status}
          {updateStatus && <IconButton
            icon={<ArrowUp />}
            isSmall
            type="primary"
            onClick={() => updateStatus(lead.email, lead.status)}
          />}
        </Value>
      </div>

      <div>
        <Name>Oportunidades:</Name>
        <Value>{lead.opportunities && lead.opportunities.join(', ')}</Value>
      </div>
    </LeadInfosWrapper>
  );
}
