import Head from 'next/head';

import { APP_TITLE } from '@/constants/config';
import Logout from '@/views/Logout';

const LogoutPage = () => (
  <>
    <Head>
      <title>{`${APP_TITLE} - Logout`}</title>
    </Head>
    <Logout />
  </>
);

export default LogoutPage;
