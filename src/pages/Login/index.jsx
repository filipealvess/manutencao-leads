import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Form from '../../components/Form';
import Field from '../../components/Field';
import PasswordFeedback from '../../components/PasswordFeedback';
import PrimaryButton from '../../components/PrimaryButton';
import PasswordContext, { usePassword } from '../../context/PasswordContext';

export default function Login() {
  return (
    <React.Fragment>
      <Header title="Manutenção de Leads" />

      <Main>
        <PasswordContext>
          <Content />
        </PasswordContext>
      </Main>
    </React.Fragment>
  );
}

function Content() {
  const { passwordValue, setPasswordValue } = usePassword();

  return (
    <Form title="Entrar no sistema">
      <Field label="Usuário" placeholder="Seu usuário" />

      <Field
        label="Senha"
        placeholder="Sua senha"
        type="password"
        value={passwordValue}
        onChange={setPasswordValue}
      />

      <Field label="Confirmação de senha" placeholder="Sua senha" type="password" />

      <PasswordFeedback />

      <PrimaryButton text="Entrar" />
    </Form>
  );
}

