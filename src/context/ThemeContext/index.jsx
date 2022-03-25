import React, { createContext, useEffect, useContext, useState } from 'react';
import appTheme from '../../styles/Theme';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(appTheme.light);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('manutencao_leads_theme'));
    const newTheme = savedTheme ? savedTheme : appTheme.light;

    setTheme(newTheme);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('manutencao_leads_theme', JSON.stringify(theme));
  }, [theme]);

  function toggleTheme() {
    if (theme.theme === 'light') {
      setTheme(appTheme.dark);
    } else {
      setTheme(appTheme.light);
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  const { theme, toggleTheme } = context;

  return { theme, toggleTheme };
}
