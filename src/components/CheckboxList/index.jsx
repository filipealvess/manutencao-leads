import React, { useState } from 'react';
import Checkbox from '../Checkbox';
import CheckboxListWrapper, { Boxes, Title } from './styles';

export default function CheckboxList({
  title,
  options,
  onChange = () => {},
  allIsChecked = false,
  checkAll = () => {}
}) {
  const [globalChecked, setGlobalChecked] = useState(null);

  function handleGlobalChange() {
      checkAll();
      setGlobalChecked(!allIsChecked);
  }

  function handleCheckboxChange(event) {
    setGlobalChecked(null);
    onChange(event);
  }

  return (
    <CheckboxListWrapper>
      <Title>
        {title}:

        <Checkbox option="Tudo" onChange={handleGlobalChange} checked={allIsChecked} />
      </Title>

      <Boxes>
        {
          options.map((option, index) => (
            <Checkbox
              key={index}
              option={option}
              onChange={handleCheckboxChange}
              checked={globalChecked}
            />
          ))
        }
      </Boxes>
    </CheckboxListWrapper>
  );
}
