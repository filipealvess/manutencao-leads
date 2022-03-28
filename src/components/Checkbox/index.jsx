import React, { useEffect, useState } from 'react';
import CheckboxWrapper, { Input } from './styles';

export default function Checkbox({ option, onChange, checked }) {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (checked !== null) {
      setIsChecked(checked);
    }
  }, [checked]);

  function handleInputChange() {
    const input = { checked: !isChecked, value: option };

    setIsChecked(!isChecked);
    onChange({ target: input });
  }

  return (
    <CheckboxWrapper>
      <Input
        type="checkbox"
        value={option}
        onChange={handleInputChange}
        checked={isChecked}
      />
      {option}
    </CheckboxWrapper>
  );
}
