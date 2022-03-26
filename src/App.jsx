import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from './context/ThemeContext';
import AppRoutes from './routes';
import GlobalStyle from './styles/GlobalStyle';
import AuthContext from './context/AuthContext';

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AuthContext>
        <AppRoutes />
      </AuthContext>
    </ThemeProvider>
  );
}
