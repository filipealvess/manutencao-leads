import React from 'react';
import LeadsHeader from '../../components/LeadsHeader';
import Header from '../../components/Header';
import Main from '../../components/Main';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Header title="Painel de Leads" />

      <Main>
        <LeadsHeader />
      </Main>
    </React.Fragment>
  );
}
