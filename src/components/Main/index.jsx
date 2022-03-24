import React from 'react';
import MainWrapper from './styles';

export default function Main({ children }) {
  return (
    <MainWrapper>
      {children}
    </MainWrapper>
  );
}
