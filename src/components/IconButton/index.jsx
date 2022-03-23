import React from 'react';
import IconButtonWrapper from './styles';

export default function IconButton({ icon, buttonHasTransition = true }) {
  return (
    <IconButtonWrapper type="button" buttonHasTransition={buttonHasTransition}>
      {icon}
    </IconButtonWrapper>
  );
}
