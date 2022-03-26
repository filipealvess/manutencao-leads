import React from 'react';
import FormWrapper, { Title } from './styles';

export default function Form({ children, title, onSubmit }) {
  return (
    <FormWrapper onSubmit={onSubmit}>
      <Title>{title}</Title>

      {children}
    </FormWrapper>
  );
}
