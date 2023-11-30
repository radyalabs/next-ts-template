import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { removeAuth } from '@/helpers';

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    removeAuth();
    router.push({
      pathname: '/login',
      query: { returnUrl: router.query.returnUrl },
    });
  }, [router]);
  return (
    <section className="text-gray-600 body-font font-sans pt-24 px-24 relative text-center">
      Logging out...
    </section>
  );
};
export default Logout;
