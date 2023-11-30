import type { ReactNode } from 'react';

import type { Profile } from '@/types/profile';

export interface AuthContextTypes {
  isAuthenticated: boolean;
  profile: Profile | undefined;
  getProfile: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
