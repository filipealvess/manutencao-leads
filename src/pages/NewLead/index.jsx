import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Form from '../../components/Form';
import Field from '../../components/Field';
import PrimaryButton from '../../components/PrimaryButton';
import CheckboxList from '../../components/CheckboxList';
import AlertPopup from '../../components/AlertPopup';
import { save } from '../../controllers/leadController';
import { useUser } from '../../context/AuthContext';
import { opportunities } from '../../static/lead';

export default function NewLead() {
  const [opportunitiesList, setOpportunitiesList] = useState([]);
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const [allOpportunitiesAreChecked, setAllOpportunitiesAreChecked] = useState(false);
  const navigate = useNavigate();
  const { userIsAuthenticated } = useUser();
  const formik = useFormik({
    initialValues: { name: '', phone: '', email: '' },
    onSubmit: values => {
      if (opportunitiesList.length === 0) {
        setPopupIsVisible(true);
      } else {
        save({ ...values, opportunities: opportunitiesList });
        navigate('/dashboard', { state: { leadWasCreated: true } });
      }
    }
  });

  useEffect(() => {
    const notAuthenticated = userIsAuthenticated !== null && userIsAuthenticated === false;

    notAuthenticated && navigate('/');
  }, [userIsAuthenticated]);

  useEffect(() => {
    setAllOpportunitiesAreChecked(opportunitiesList.length === opportunities.length);
  }, [opportunitiesList]);

  function handleCheckboxChange({ target }) {
    const { checked, value } = target;
    
    setOpportunitiesList(checked
      ? [...opportunitiesList, value]
      : opportunitiesList.filter(opportunity => opportunity !== value)
    );
  }

  function handleCheckAllOpportunities() {
    if (allOpportunitiesAreChecked) {
      setOpportunitiesList([]);
      setAllOpportunitiesAreChecked(false);
    } else {
      setOpportunitiesList([...opportunities]);
      setAllOpportunitiesAreChecked(true);
    }
  }

  return (
    <React.Fragment>
      <Header title="Novo Lead" />

      <Main>
        <Form title="Informações do lead" onSubmit={formik.handleSubmit}>
          <Field
            label="Nome"
            placeholder="Nome do lead"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />

          <Field
            label="Telefone"
            placeholder="Telefone do lead"
            type="tel"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
          />

          <Field
            label="E-mail"
            placeholder="E-mail do lead"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />

          <CheckboxList
            title="Oportunidades"
            options={opportunities}
            onChange={handleCheckboxChange}
            allIsChecked={allOpportunitiesAreChecked}
            checkAll={handleCheckAllOpportunities}
          />

          <PrimaryButton text="Salvar" />

          <AlertPopup
            title="Calma!"
            message="A lista de oportunidades está vazia, selecione pelo menos 1 opção"
            isVisible={popupIsVisible}
            onHide={() => setPopupIsVisible(false)}
          />
        </Form>
      </Main>
    </React.Fragment>
  );
}
