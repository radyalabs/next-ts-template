import { Suspense } from 'react';
import type { Metadata } from 'next';

import Logout from '#authentication/views/Logout';

export const metadata: Metadata = {
  title: 'Logout',
};

const LogoutPage = () => (
  <Suspense>
    <Logout />
  </Suspense>
);

export default LogoutPage;
