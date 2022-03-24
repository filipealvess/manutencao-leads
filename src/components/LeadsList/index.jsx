import React from 'react';
import { ChevronDown, CornerRightUp } from 'react-feather';
import LeadsListWrapper, { Amount, Details, Item, Title } from './styles';

export default function LeadsList({ title, itemsAreBlocked = false }) {
  const icon = <CornerRightUp size={20} />;

  return (
    <LeadsListWrapper>
      <Title>
        {title}

        <Details>
          <Amount>3</Amount>
          <button><ChevronDown /></button>
        </Details>
      </Title>

      <ul>
        <Item isBlocked={itemsAreBlocked}>Org. Internacionais {icon}</Item>
        <Item isBlocked={itemsAreBlocked}>Musc. Sound Live Cmp {icon}</Item>
        <Item isBlocked={itemsAreBlocked}>Ind. Farm. LTDA {icon}</Item>
      </ul>
    </LeadsListWrapper>
  );
}
