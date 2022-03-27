import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronRight, CornerRightUp } from 'react-feather';
import LeadsListWrapper, { Amount, Details, Item, Header, Title, List } from './styles';

export default function LeadsList({ title, items, itemsAreBlocked = false }) {
  const [amount, setAmount] = useState(0);
  const [listIsVisible, setListIsVisible] = useState(false);
  const [listIcon, setListIcon] = useState(<ChevronRight />);
  const icon = <CornerRightUp size={20} />;

  function toggleListVisibility() {
    if (amount > 0) {
      setListIsVisible(!listIsVisible);
    }
  }

  useEffect(() => {
    if (items) {
      setAmount(items.length);
    }
  }, [items]);

  useEffect(() => {
    if (amount > 0) {
      setListIsVisible(true);
    }
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
            <Item isBlocked={itemsAreBlocked} key={item.email}>
              {item.name} {icon}
            </Item>
          ))
        }
      </List>
    </LeadsListWrapper>
  );
}
