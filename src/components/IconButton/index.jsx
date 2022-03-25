import React from 'react';
import IconButtonWrapper from './styles';

export default function IconButton({
  icon,
  onClick = () => {},
  buttonHasTransition = true
}) {
  return (
    <IconButtonWrapper
      type="button"
      buttonHasTransition={buttonHasTransition}
      onClick={onClick}
    >
      {icon}
    </IconButtonWrapper>
  );
}
