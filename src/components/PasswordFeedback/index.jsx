import React, { useEffect } from 'react';
import { usePasswordStatus } from '../../context/PasswordContext';
import passwordRules from '../../static/passwordRules';
import PasswordRule from '../PasswordRule';
import PasswordFeedbackWrapper, { Feedback, Header, Level, Progress, Status } from './styles';

export default function PasswordFeedback({ pass1, pass2 }) {
  const {
    updateRulesStatus,
    restart,
    level,
    status,
    passwordIsNotEmpty,
    halfOfRulesWereFulfilled,
    passwordIsHard
  } = usePasswordStatus();

  useEffect(() => {
    restart(pass1);
  }, [pass1, pass2]);

  return (
    <PasswordFeedbackWrapper>
      <Header>
        <Feedback>
          Sua senha é
          <Status level={level}> {status}</Status>
        </Feedback>

        <Progress level={level}>
          <Level active={passwordIsNotEmpty} />
          <Level active={halfOfRulesWereFulfilled} />
          <Level active={passwordIsHard} />
        </Progress>
      </Header>

      <ul>
        {passwordRules.map(({ id, rule, validator }) => (
          <PasswordRule
            key={id}
            id={id}
            pass1={pass1}
            pass2={pass2}
            rule={rule}
            validator={validator}
            updateStatus={updateRulesStatus}
          />
        ))}
      </ul>
    </PasswordFeedbackWrapper>
  );
}
