import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeadsHeaderWrapper, { Button, Title } from './styles';

export default function LeadsHeader() {
  const navigate = useNavigate();

  function goToNewLeadPage() {
    navigate('/novo-lead');
  }

  return (
    <LeadsHeaderWrapper>
      <Title>Seus leads</Title>
      <Button type="button" onClick={goToNewLeadPage}>
        Novo Lead
      </Button>
    </LeadsHeaderWrapper>
  );
}
