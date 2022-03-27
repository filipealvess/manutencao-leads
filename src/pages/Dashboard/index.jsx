import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeadsHeader from '../../components/LeadsHeader';
import Header from '../../components/Header';
import Main from '../../components/Main';
import LeadsGrid from '../../components/LeadsGrid';
import AlertPopup from '../../components/AlertPopup';

export default function Dashboard() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setPopupIsVisible(location.state.leadWasCreated);
    }
  }, [location]);

  return (
    <React.Fragment>
      <Header title="Painel de Leads" />

      <Main>
        <LeadsHeader />

        <LeadsGrid />

        <AlertPopup
          title="Show!"
          message="Lead criado com sucesso!"
          isVisible={popupIsVisible}
          onHide={() => setPopupIsVisible(false)}
        />
      </Main>
    </React.Fragment>
  );
}
