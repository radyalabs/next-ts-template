'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { removeAuth } from '@/helpers';

const Logout = () => {
  const router = useRouter();
  const query = useSearchParams();
  const returnUrl = query ? Object.fromEntries(query).returnUrl : '';
  useEffect(() => {
    removeAuth();
    router.push(`/login?${returnUrl ? `returnUrl=${returnUrl}` : ''}`);
  }, [returnUrl, router]);
  return (
    <section className="text-gray-600 body-font font-sans pt-24 px-24 relative text-center">
      Logging out...
    </section>
  );
};
export default Logout;
