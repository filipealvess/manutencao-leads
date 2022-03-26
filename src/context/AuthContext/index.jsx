import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUser } from '../../controllers/userController';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(null);

  useEffect(() => {
    const localUser = getUser();

    if (localUser) {
      setUserIsAuthenticated(true);
    } else {
      setUserIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userIsAuthenticated, setUserIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useUser() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }

  const { userIsAuthenticated, setUserIsAuthenticated } = context;

  return { userIsAuthenticated, setUserIsAuthenticated };
}
