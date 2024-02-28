import type { Metadata } from 'next';

import { APP_TITLE } from '@/constants/config';
import Login from '@/views/Login';

export const metadata: Metadata = {
  title: `${APP_TITLE} - Login`,
};

const LoginPage = () => <Login />;

export default LoginPage;
