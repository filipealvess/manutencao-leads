import React, { useEffect } from 'react';
import { Moon } from 'react-feather';
import HeaderWrapper, { HeaderContent, LogoContent, LogoWrapper, PageTitle, ThemeButton } from './styles';

export default function Header({ title = '' }) {
  const logo = require('../../assets/logo.svg');

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LogoWrapper>
          <LogoContent>
            <img
              src={logo}
              alt="Imagem semelhante a um rio fazendo curvas, começando no centro, indo para a parte inferior esquerda, depois para a direita e terminando na parte superior esquerda."
            />
            <p>EloGroup</p>
          </LogoContent>

          <PageTitle>{title}</PageTitle>
        </LogoWrapper>

        <ThemeButton type="button">
          <Moon />
        </ThemeButton>
      </HeaderContent>
    </HeaderWrapper>
  );
}
