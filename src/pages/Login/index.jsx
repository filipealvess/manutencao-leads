import React, { useState } from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Form from '../../components/Form';
import Field from '../../components/Field';
import PasswordFeedback from '../../components/PasswordFeedback';
import PrimaryButton from '../../components/PrimaryButton';
import PasswordContext, { usePasswordStatus } from '../../context/PasswordContext';
import { useFormik } from 'formik';
import AlertPopup from '../../components/AlertPopup';
import { useUser } from '../../context/AuthContext';
import { saveUser } from '../../controllers/userController';
import { useNavigate } from 'react-router-dom';

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
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const { level } = usePasswordStatus();
  const { setUserIsAuthenticated } = useUser();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { user: '', pass1: '', pass2: ''},
    onSubmit: values => {
      if (level < 3) {
        setPopupIsVisible(true);
      } else {
        setUserIsAuthenticated(true);
        saveUser(values.user);
        navigate('/dashboard');
      }
    }
  });

  return (
    <Form title="Entrar no sistema"  onSubmit={formik.handleSubmit}>
      <Field
        name="user"
        label="Usuário"
        placeholder="Seu usuário"
        value={formik.values.user}
        onChange={formik.handleChange}
      />

      <Field
        name="pass1"
        label="Senha"
        placeholder="Sua senha"
        type="password"
        value={formik.values.pass1}
        onChange={formik.handleChange}
      />

      <Field
        name="pass2"
        label="Confirmação de senha"
        placeholder="Sua senha"
        type="password"
        value={formik.values.pass2}
        onChange={formik.handleChange}
      />

      <PasswordFeedback
        pass1={formik.values.pass1}
        pass2={formik.values.pass2}
      />

      <PrimaryButton text="Entrar" />

      <AlertPopup
        title="Sua senha é fraca"
        message="Siga as regras para ter uma senha forte e poder avançar :)"
        isVisible={popupIsVisible}
        onHide={() => setPopupIsVisible(false)}
      />
    </Form>
  );
}

