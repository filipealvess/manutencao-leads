import React from 'react';
import PrimaryButtonWrapper from './styles';

export default function PrimaryButton({ text }) {
  return (
    <PrimaryButtonWrapper type="submit">
      {text}
    </PrimaryButtonWrapper>
  );
}
