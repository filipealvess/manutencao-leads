import React from 'react';
import LeadsHeader from '../../components/LeadsHeader';
import Header from '../../components/Header';
import Main from '../../components/Main';
import LeadsGrid from '../../components/LeadsGrid';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Header title="Painel de Leads" />

      <Main>
        <LeadsHeader />

        <LeadsGrid />
      </Main>
    </React.Fragment>
  );
}
