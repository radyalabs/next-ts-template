import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Typography from '@/components/base/Typography';
import { APP_TITLE } from '@/constants/config';
import { useAuthContext } from '@/contexts/AuthContext';

const Home = () => {
  const { isAuthenticated, profile } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated && profile) {
      router.push('/dashboard');
    } else {
      router.push('/login');
    }
  }, [isAuthenticated, profile, router]);

  return (
    <>
      <Head>
        <title>{APP_TITLE}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex text-center m-auto h-[100vh] justify-center items-center">
        <Typography>Authenticating...</Typography>
      </div>
    </>
  );
};

export default Home;
