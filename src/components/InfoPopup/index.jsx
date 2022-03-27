import React from 'react';
import { X } from 'react-feather';
import IconButton from '../IconButton';
import InfoPopupBackground, { Header, InfoPopupWrapper, Title } from './styles';

export default function InfoPopup({
  title,
  titlePrefix = '',
  isVisible,
  onHide = () => {},
  children
}) {
  return (
    <InfoPopupBackground isVisible={isVisible}>
      <InfoPopupWrapper>
        <Header>
          <Title>
            {titlePrefix} {title}
          </Title>

          <IconButton
            icon={<X />}
            buttonHasTransition={false}
            onClick={onHide}
          />
        </Header>

        {children}
      </InfoPopupWrapper>
    </InfoPopupBackground>
  );
}
