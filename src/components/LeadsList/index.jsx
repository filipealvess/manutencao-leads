import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight } from 'react-feather';
import LeadsListWrapper, { Amount, Details, Item, Header, Title, List } from './styles';

export default function LeadsList({
  title,
  items,
  itemsAreBlocked = false,
  onClick
}) {
  const [amount, setAmount] = useState(0);
  const [listIsVisible, setListIsVisible] = useState(false);
  const [listIcon, setListIcon] = useState(<ChevronRight />);

  function toggleListVisibility() {
    amount > 0 && setListIsVisible(!listIsVisible);
  }

  useEffect(() => {
    items && setAmount(items.length);
  }, [items]);

  useEffect(() => {
    amount > 0 && setListIsVisible(true);
  }, [amount]);

  useEffect(() => {
    setListIcon(listIsVisible ? <ChevronDown /> : <ChevronRight />);
  }, [listIsVisible]);

  return (
    <LeadsListWrapper>
      <Header onClick={toggleListVisibility}>
        <Title>{title}</Title>

        <Details>
          <Amount>{amount}</Amount>
          <button>{listIcon}</button>
        </Details>
      </Header>

      <List isVisible={listIsVisible}>
        {
          items && items.map(item => (
            <Item
              isBlocked={itemsAreBlocked}
              key={item.email}
              onClick={() => onClick(item)}
            >
              {item.name}
            </Item>
          ))
        }
      </List>
    </LeadsListWrapper>
  );
}
