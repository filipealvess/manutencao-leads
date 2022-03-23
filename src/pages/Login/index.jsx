import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Form from '../../components/Form';
import Field from '../../components/Field';

export default function Login() {
  return (
    <React.Fragment>
      <Header title="Manutenção de Leads" />

      <Main>
        <Form title="Entrar no sistema">
          <Field label="Usuário" placeholder="Seu usuário" />
          <Field label="Senha" placeholder="Sua senha" type="password" />
          <Field label="Confirmação de senha" placeholder="Sua senha" type="password" />
        </Form>
      </Main>
    </React.Fragment>
  );
}
