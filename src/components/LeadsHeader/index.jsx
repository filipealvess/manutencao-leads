import React from 'react';
import LeadsHeaderWrapper, { Button, Title } from './styles';

export default function LeadsHeader() {
  return (
    <LeadsHeaderWrapper>
      <Title>Seus leads</Title>
      <Button type="button">Novo Lead</Button>
    </LeadsHeaderWrapper>
  );
}
