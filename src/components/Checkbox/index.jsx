import React from 'react';
import CheckboxWrapper, { Input } from './styles';

export default function Checkbox({ option, onChange }) {
  return (
    <CheckboxWrapper>
      <Input type="checkbox" value={option} onChange={onChange} />
      {option}
    </CheckboxWrapper>
  );
}
