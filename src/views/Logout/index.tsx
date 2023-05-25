import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';
import { deleteCookie } from 'cookies-next';

import { APP_TOKEN_KEY } from '@/constants/config';
import { useAuthContext } from '@/contexts/AuthContext';

const Logout = () => {
  const { isAuthenticated } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      deleteCookie(APP_TOKEN_KEY);
      delete axios.defaults.headers.common.Authorization;
    }
    router.push('/login');
  }, [isAuthenticated, router]);
  return (
    <section className="text-gray-600 body-font font-sans pt-24 px-24 relative text-center">
      Logging out...
    </section>
  );
};
export default Logout;
