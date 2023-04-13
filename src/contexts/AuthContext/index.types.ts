import type { ReactNode } from 'react';

export interface AuthContextTypes {
  isAuthenticated: boolean;
  profile: Record<string, unknown>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
