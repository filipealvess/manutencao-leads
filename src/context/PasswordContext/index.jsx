import React, { createContext, useContext, useState } from 'react';

const PasswordContext = createContext();

export default function PasswordProvider({ children }) {
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  return (
    <PasswordContext.Provider value={{
      passwordValue,
      setPasswordValue,
      passwordIsVisible,
      setPasswordIsVisible
    }}>
      {children}
    </PasswordContext.Provider>
  );
}

export function usePassword() {
  const context = useContext(PasswordContext);

  if (!context) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }

  const {
    passwordValue,
    setPasswordValue,
    passwordIsVisible,
    setPasswordIsVisible
  } = context;

  return {
    passwordValue,
    setPasswordValue,
    passwordIsVisible,
    setPasswordIsVisible
  };
}
