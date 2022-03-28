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
  onChange = () => {},
  name
}) {
  const [inputIsFocus, setInputIsFocus] = useState(false);
  const [inputType, setIinputType] = useState(type);
  const [icon, setIcon] = useState(<Eye />);
  let passwordIsVisible = false;
  let setPasswordIsVisible = () => {};

  if (type === 'password') {
    const { passwordIsVisible: prop, setPasswordIsVisible: func } = usePassword();

    passwordIsVisible = prop;
    setPasswordIsVisible = func;
  }

  useEffect(() => {
    if (type === 'password') {
      setIinputType(passwordIsVisible ? 'text' : 'password');
      setIcon(passwordIsVisible ? <EyeOff /> : <Eye />);
    }
  }, [passwordIsVisible]);

  return (
    <FieldWrapper>
      <span>{label}:</span>

      <InputWrapper isFocus={inputIsFocus}>
        <Input
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
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
            onClick={() => setPasswordIsVisible(!passwordIsVisible)}
            ariaLabel={`${passwordIsVisible ? 'Ocultar' : 'Mostrar'} senha`}
          />
        }
      </InputWrapper>
    </FieldWrapper>
  );
}
