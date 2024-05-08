import { Suspense } from 'react';
import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import Logout from '@/views/Logout';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Logout`,
};

const LogoutPage = () => (
  <Suspense>
    <Logout />
  </Suspense>
);

export default LogoutPage;
