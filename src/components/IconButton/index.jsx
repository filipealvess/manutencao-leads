import React from 'react';
import IconButtonWrapper from './styles';

export default function IconButton({
  icon,
  type = 'default',
  isSmall = false,
  onClick = () => {},
  buttonHasTransition = true,
  ariaLabel = ''
}) {
  return (
    <IconButtonWrapper
      type="button"
      buttonHasTransition={buttonHasTransition}
      onClick={onClick}
      buttonType={type}
      isSmall={isSmall}
      aria-label={ariaLabel}
    >
      {icon}
    </IconButtonWrapper>
  );
}
