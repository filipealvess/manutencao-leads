import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Trash } from 'react-feather';
import LeadsHeader from '../../components/LeadsHeader';
import Header from '../../components/Header';
import Main from '../../components/Main';
import LeadsGrid from '../../components/LeadsGrid';
import AlertPopup from '../../components/AlertPopup';
import InfoPopup from '../../components/InfoPopup';
import IconButton from '../../components/IconButton';
import LeadInfos from '../../components/LeadInfos';
import { getAll, remove, updateStatus } from '../../controllers/leadController';
import { useUser } from '../../context/AuthContext';

export default function Dashboard() {
  const [alertPopupIsVisible, setAlertPopupIsVisible] = useState(false);
  const [infoPopupIsVisible, setInfoPopupIsVisible] = useState(false);
  const [selectedLead, setSelectedLead] = useState({});
  const [updateStatusFunction, setUpdateStatusFunction] = useState(null);
  const [leads, setLeads] = useState([]);
  const [alertTitle, setAlertTitle] = useState('Sucesso');
  const [alertMessage, setAlertMessage] = useState('Lead criado com sucesso! Clique nele para ver os detalhes ;)');
  const location = useLocation();
  const navigate = useNavigate();
  const { userIsAuthenticated } = useUser();

  useEffect(() => {
    const notAuthenticated = userIsAuthenticated !== null && userIsAuthenticated === false;

    notAuthenticated && navigate('/');
  }, [userIsAuthenticated]);

  useEffect(loadLeads, []);

  useEffect(() => {
    location.state && setAlertPopupIsVisible(location.state.leadWasCreated);
  }, [location]);

  function loadLeads() {
    const savedLeads = getAll();

    savedLeads && setLeads(savedLeads);
  }

  function restartUI(title, message) {
    handleInfoPopupHide();
    loadLeads();
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertPopupIsVisible(true);
  }

  function updateLeadStatus(email, status) {
    updateStatus(email, status);
    restartUI('Status atualizado', 'O status do lead foi atualizado, clique nele para ver os detalhes ;)');
  }

  function showLeadInfo(lead, status) {
    const updateStatusFunctionValue = status !== 'Reunião Agendada' ? () => updateLeadStatus : null;

    setUpdateStatusFunction(updateStatusFunctionValue);
    setSelectedLead({ ...lead, status });
    setInfoPopupIsVisible(true);
    setAlertPopupIsVisible(false);
  }

  function handleInfoPopupHide() {
    setInfoPopupIsVisible(false);
    setUpdateStatusFunction(null);
    setSelectedLead({});
  }

  function removeLead() {
    remove(selectedLead.email, selectedLead.status);
    restartUI('Lead excluído', 'O lead foi excluído. Aproveite para adicionar outro à lista');
  }

  return (
    <React.Fragment>
      <Header title="Painel de Leads" />

      <Main>
        <LeadsHeader />

        <LeadsGrid onSelectLead={showLeadInfo} leads={leads} />

        <AlertPopup
          title={alertTitle}
          message={alertMessage}
          isVisible={alertPopupIsVisible}
          onHide={() => setAlertPopupIsVisible(false)}
        />

        <InfoPopup
          title="Informações do Lead"
          titlePrefix={<IconButton icon={<Trash />} type="remove" isSmall onClick={removeLead} />}
          isVisible={infoPopupIsVisible}
          onHide={handleInfoPopupHide}
        >
          <LeadInfos lead={selectedLead} updateStatus={updateStatusFunction} />
        </InfoPopup>
      </Main>
    </React.Fragment>
  );
}
