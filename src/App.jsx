import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}
