import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { APP_REFRESH_KEY, APP_TITLE, APP_TOKEN_KEY } from '@/constants/config';

export const metadata: Metadata = {
  title: APP_TITLE,
};

const Home = () => {
  const cookieStore = cookies();
  const jwt = cookieStore.get(APP_TOKEN_KEY);
  const refreshToken = cookieStore.get(APP_REFRESH_KEY);
  if (!!jwt && refreshToken) {
    redirect('/dashboard');
  }
  redirect('/login');
};

export default Home;
