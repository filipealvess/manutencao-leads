import React, { useState } from 'react';
import { Eye } from 'react-feather';
import IconButton from '../IconButton';
import FieldWrapper, { Input, InputWrapper } from './styles';

export default function Field({ label, placeholder, type = 'text' }) {
  const [inputIsFocus, setInputIsFocus] = useState(false);
  const toggleButton = <IconButton icon={<Eye />} buttonHasTransition={false} />;

  return (
    <FieldWrapper>
      <span>{label}:</span>

      <InputWrapper isFocus={inputIsFocus}>
        <Input
          type={type}
          placeholder={placeholder}
          required
          onFocus={() => setInputIsFocus(true)}
          onBlur={() => setInputIsFocus(false)}
        />

        {type === 'password' && toggleButton}
      </InputWrapper>
    </FieldWrapper>
  );
}
