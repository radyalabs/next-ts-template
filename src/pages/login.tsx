import Head from 'next/head';

import { APP_TITLE } from '@/constants/config';
import Login from '@/features/Login';

const LoginPage = () => (
  <>
    <Head>
      <title>{`${APP_TITLE} - Login`}</title>
    </Head>
    <Login />
  </>
);

export default LoginPage;
