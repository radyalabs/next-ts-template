'use client';

import React, {
  createContext,
  useContext,
  useMemo,
} from 'react';

import { getCookie } from 'cookies-next';

import { ENDPOINT } from '@/constants/apiURL';
import { APP_REFRESH_KEY, APP_TOKEN_KEY } from '@/constants/config';
import { INIT_PROFILE } from '@/contexts/AuthContext/AuthContext.constants';
import profileNormalizer from '@/contexts/AuthContext/AuthContext.normalizer';
import useGetData from '@/hooks/useGetData';
import type { Profile } from '@/types/profile';

import type { AuthContextTypes, AuthProviderProps } from './AuthContext.types';

const AuthContext = createContext<AuthContextTypes | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const token = getCookie(APP_TOKEN_KEY);
  const refreshToken = getCookie(APP_REFRESH_KEY);
  const isAuthenticated = useMemo(() => !!token || !!refreshToken, [refreshToken, token]);

  const { data: profile, refetch: getProfile } = useGetData<Profile>(
    ['profile'],
    ENDPOINT.IDENTITY.PROFILE,
    {
      normalizer: profileNormalizer,
      options: {
        initialData: INIT_PROFILE,
        enabled: isAuthenticated,
      },
    },
  );

  const authProviderValue = useMemo(
    () => ({
      isAuthenticated,
      profile,
      token,
      getProfile,
    }),
    [isAuthenticated, profile, token, getProfile],
  );

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
