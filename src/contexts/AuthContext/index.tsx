import React, {
  createContext, useContext, useMemo, useState,
} from 'react';

import { getCookie } from 'cookies-next';

import { APP_TOKEN_KEY } from '@/constants/config';

import type { AuthContextTypes, AuthProviderProps } from './index.types';

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = getCookie(APP_TOKEN_KEY);
  const isAuthenticated = useMemo(() => (
    !!token
  ), [token]);

  const [profile] = useState({
    id: '',
    userId: '',
    name: '',
    email: '',
  });

  // TODO: generate profile value from auth/me api

  const authProviderValue = useMemo(() => ({
    isAuthenticated,
    profile,
    token,
  }), [isAuthenticated, profile, token]);
  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('"useAuthContext" must be used within "AuthProvider"');
  }

  return context;
};

export { AuthProvider, useAuthContext };
