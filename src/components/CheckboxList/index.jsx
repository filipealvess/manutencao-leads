import React from 'react';
import Checkbox from '../Checkbox';
import CheckboxListWrapper, { Boxes } from './styles';

export default function CheckboxList({ title, options }) {
  return (
    <CheckboxListWrapper>
      <p>{title}:</p>

      <Boxes>
        {
          options.map((option, index) => (
            <Checkbox key={index} option={option} />
          ))
        }
      </Boxes>
    </CheckboxListWrapper>
  );
}
