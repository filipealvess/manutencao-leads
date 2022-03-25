import React, { useEffect, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';
import { usePassword } from '../../context/PasswordContext';
import IconButton from '../IconButton';
import FieldWrapper, { Input, InputWrapper } from './styles';

export default function Field({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange = () => {}
}) {
  const [inputIsFocus, setInputIsFocus] = useState(false);
  const [inputType, setIinputType] = useState(type);
  const [icon, setIcon] = useState(<Eye />);
  const { passwordIsVisible, setPasswordIsVisible } = usePassword();

  useEffect(() => {
    setIinputType(passwordIsVisible ? 'text' : 'password');
    setIcon(passwordIsVisible ? <EyeOff /> : <Eye />);
  }, [passwordIsVisible]);

  function handleInputChange({ target }) {
    onChange(target.value);
  }

  function handleIconButtonClick() {
    setPasswordIsVisible(!passwordIsVisible);
  }

  return (
    <FieldWrapper>
      <span>{label}:</span>

      <InputWrapper isFocus={inputIsFocus}>
        <Input
          type={inputType}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          required
          onFocus={() => setInputIsFocus(true)}
          onBlur={() => setInputIsFocus(false)}
        />

        {
          type === 'password' &&
          <IconButton
            icon={icon}
            buttonHasTransition={false}
            onClick={handleIconButtonClick}
          />
        }
      </InputWrapper>
    </FieldWrapper>
  );
}
