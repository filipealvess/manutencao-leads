import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LeadsHeader from '../../components/LeadsHeader';
import Header from '../../components/Header';
import Main from '../../components/Main';
import LeadsGrid from '../../components/LeadsGrid';
import AlertPopup from '../../components/AlertPopup';
import InfoPopup from '../../components/InfoPopup';
import IconButton from '../../components/IconButton';
import { Trash } from 'react-feather';
import LeadInfos from '../../components/LeadInfos';

export default function Dashboard() {
  const [alertPopupIsVisible, setAlertPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [selectedLead, setSelectedLead] = useState({});
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setAlertPopupIsVisible(location.state.leadWasCreated);
    }
  }, [location]);

  function showLeadInfo(lead, status) {
    setSelectedLead({ ...lead, status });
    setInfoPopupIsVisible(true);
  }

  function handleInfoPopupHide() {
    setInfoPopupIsVisible(false);
    setSelectedLead({});
  }

  return (
    <React.Fragment>
      <Header title="Painel de Leads" />

      <Main>
        <LeadsHeader />

        <LeadsGrid onSelectLead={showLeadInfo} />

        <AlertPopup
          title="Show!"
          message="Lead criado com sucesso!"
          isVisible={alertPopupIsVisible}
          onHide={() => setAlertPopupIsVisible(false)}
        />

        <InfoPopup
          title="Informações do Lead"
          titlePrefix={
            <IconButton
              icon={<Trash />}
              type="delete"
              isSmall
            />
          }
          isVisible={infoPopupIsVisible}
          onHide={handleInfoPopupHide}
        >
          <LeadInfos lead={selectedLead} />
        </InfoPopup>
      </Main>
    </React.Fragment>
  );
}
