import { Suspense } from 'react';
import type { Metadata } from 'next';

import Login from '#authentication/views/Login';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage = () => (
  <Suspense>
    <Login />
  </Suspense>
);

export default LoginPage;
