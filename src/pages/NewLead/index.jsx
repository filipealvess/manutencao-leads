import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Form from '../../components/Form';
import Field from '../../components/Field';
import PrimaryButton from '../../components/PrimaryButton';
import CheckboxList from '../../components/CheckboxList';
import { opportunities } from '../../static/lead';

export default function NewLead() {
  return (
    <React.Fragment>
      <Header title="Novo Lead" />

      <Main>
        <Form title="Informações do lead">
          <Field label="Nome" placeholder="Nome do lead" />
          <Field label="Telefone" placeholder="Digite apenas números" type="tel" />
          <Field label="E-mail" placeholder="E-mail do lead" type="email" />

          <CheckboxList title="Oportunidades" options={opportunities} />

          <PrimaryButton text="Salvar" />
        </Form>
      </Main>
    </React.Fragment>
  );
}
