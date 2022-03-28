import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'react-feather';
import IconButton from '../IconButton';
import HeaderWrapper, { HeaderContent, LogoContent, LogoWrapper, PageTitle } from './styles';
import { useTheme } from '../../context/ThemeContext';

export default function Header({ title = '' }) {
  const { theme, toggleTheme } = useTheme();
  const [icon, setIcon] = useState(<Moon />);
  const logo = require('../../assets/logo.svg');

  useEffect(() => {
    setIcon(theme.theme === 'light' ? <Moon /> : <Sun />);
  }, [theme]);

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

        <IconButton icon={icon} onClick={toggleTheme} ariaLabel="Alterar tema da aplicação" />
      </HeaderContent>
    </HeaderWrapper>
  );
}
