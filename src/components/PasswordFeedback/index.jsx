import React from 'react';
import { X } from 'react-feather';
import PasswordFeedbackWrapper, {
  Feedback,
  Header,
  Level,
  Progress,
  Rule,
  Status
} from './styles';

export default function PasswordFeedback() {
  return (
    <PasswordFeedbackWrapper>
      <Header>
        <Feedback>Sua senha é <Status>fraca</Status></Feedback>

        <Progress>
          <Level />
          <Level />
          <Level />
        </Progress>
      </Header>

      <ul>
        <Rule><X size={20} /> Possui pelo menos 8 caracteres</Rule>
        <Rule><X size={20} /> Possui caracteres especiais</Rule>
        <Rule><X size={20} /> Possui números</Rule>
        <Rule><X size={20} /> Possui letras maiúsculas e minúsculas</Rule>
        <Rule><X size={20} /> A senha e a confirmação são iguais</Rule>
      </ul>
    </PasswordFeedbackWrapper>
  );
}
