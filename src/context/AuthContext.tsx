import React, { createContext, useCallback } from 'react';
import SignIn from '../pages/SignIn/index';

interface AuthContextData {
  name: string;
  signIn(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(() => {
    console.log('signin');
  }, []);

  return (
    <AuthContext.Provider value={{ name: 'felipe', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
