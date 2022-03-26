import React from 'react';
import { X } from 'react-feather';
import AlertPopupWrapper, { Header, Message, Title } from './styles';

export default function AlertPopup({
  title,
  message,
  isVisible,
  onHide = () => {}
}) {
  return (
    <AlertPopupWrapper isVisible={isVisible}>
      <Header>
        <Title>{title}</Title>
        <button onClick={onHide} type="button">
          <X size={20} />
        </button>
      </Header>

      <Message>{message}</Message>
    </AlertPopupWrapper>
  );
}
