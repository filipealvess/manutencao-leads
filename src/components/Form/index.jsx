import React from 'react';
import FormWrapper, { Title } from './styles';

export default function Form({ children, title }) {
  return (
    <FormWrapper>
      <Title>{title}</Title>

      {children}
    </FormWrapper>
  );
}
