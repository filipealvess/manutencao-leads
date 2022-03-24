import React from 'react';
import CheckboxWrapper, { Input } from './styles';

export default function Checkbox({ option }) {
  return (
    <CheckboxWrapper>
      <Input type="checkbox" />
      {option}
    </CheckboxWrapper>
  );
}
