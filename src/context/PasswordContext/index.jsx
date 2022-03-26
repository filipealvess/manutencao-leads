import React, { createContext, useContext, useEffect, useState } from 'react';
import { halfWasFulfilled, isHard, isNotEmpty } from '../../controllers/passwordController';
import passwordRules from '../../static/passwordRules';

const PasswordContext = createContext();

export default function PasswordProvider({ children }) {
  const [rulesStatus, setRulesStatus] = useState(rulesStatusInitialState());
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [status, setStatus] = useState('fraca');
  const [level, setLevel] = useState(1);
  const [passwordIsHard, setPasswordIsHard] = useState(false);
  const [halfOfRulesWereFulfilled, setHalfOfRulesWereFulfilled] = useState(false);
  const [passwordIsNotEmpty, setPasswordIsNotEmpty] = useState(false);

  function rulesStatusInitialState() {
    return passwordRules.reduce((state, rule) => {
      state[rule.id] = false;
      return state;
    }, {});
  }

  function updateRulesStatus(ruleId, wasFulfilled) {
    const newStatus = rulesStatus;
    newStatus[ruleId] = wasFulfilled;
    
    setRulesStatus(newStatus);
  }

  function restart(pass1) {
    setPasswordIsHard(isHard(rulesStatus));
    setHalfOfRulesWereFulfilled(halfWasFulfilled(rulesStatus));
    setPasswordIsNotEmpty(isNotEmpty(pass1));

    if (!isNotEmpty(pass1)) {
      setLevel(1);
    }
  }

  useEffect(() => {
    if (passwordIsHard) {
      setStatus('forte');
      setLevel(3);
    } else if (halfOfRulesWereFulfilled) {
      setStatus('fraca');
      setLevel(2);
    } else {
      setStatus('fraca');
      setLevel(1);
    }
  }, [halfOfRulesWereFulfilled, passwordIsHard]);

  return (
    <PasswordContext.Provider value={{
      level,
      status,
      passwordIsNotEmpty,
      halfOfRulesWereFulfilled,
      passwordIsHard,
      passwordIsVisible,
      updateRulesStatus,
      restart,
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

  const { passwordIsVisible, setPasswordIsVisible } = context;

  return { passwordIsVisible, setPasswordIsVisible };
}

export function usePasswordStatus() {
  const context = useContext(PasswordContext);

  if (!context) {
    throw new Error('usePasswordStatus must be used within a PasswordProvider');
  }

  const {
    updateRulesStatus,
    restart,
    level,
    status,
    passwordIsNotEmpty,
    halfOfRulesWereFulfilled,
    passwordIsHard
  } = context;

  return {
    updateRulesStatus,
    restart,
    level,
    status,
    passwordIsNotEmpty,
    halfOfRulesWereFulfilled,
    passwordIsHard
  };
}
