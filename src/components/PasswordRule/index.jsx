import React, { useEffect } from 'react';
import { Check, X } from 'react-feather';
import Rule from './styles';

export default function PasswordRule({
  id,
  rule,
  validator,
  pass1,
  pass2,
  updateStatus
}) {
  const ruleWasFulfilled = validator(pass1, pass2);
  const icon = ruleWasFulfilled ? <Check size={20} /> : <X size={20} />;

  useEffect(() => {
    updateStatus(id, ruleWasFulfilled);
  }, [ruleWasFulfilled]);

  return (
    <Rule wasFulfilled={ruleWasFulfilled}>
      {icon} {rule}
    </Rule>
  );
}
