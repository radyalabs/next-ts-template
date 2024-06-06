import type { ReactNode } from 'react';

import AuthLayout from '@/components/layout/AuthLayout';

const AuthenticationLayout = ({ children }: { children: ReactNode }) => (
  <AuthLayout>{children}</AuthLayout>
);

export default AuthenticationLayout;
