import React from 'react';
import Checkbox from '../Checkbox';
import CheckboxListWrapper, { Boxes } from './styles';

export default function CheckboxList({ title, options, onChange = () => {} }) {
  return (
    <CheckboxListWrapper>
      <p>{title}:</p>

      <Boxes>
        {
          options.map((option, index) => (
            <Checkbox key={index} option={option} onChange={onChange} />
          ))
        }
      </Boxes>
    </CheckboxListWrapper>
  );
}
