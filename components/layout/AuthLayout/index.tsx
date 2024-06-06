'use client';

import Image from 'next/image';

import type { ReactNode } from 'react';

import logo from '@/assets/brand_light.svg';
import loginBG from '@/assets/login-bg.png';

const AuthLayout = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <section
      className="body-font font-sans overflow-hidden
    relative h-screen bg-n-1 w-full flex items-center justify-between"
    >
      <div className="bg-primary-600 w-[318px] h-full">
        <Image
          src={logo}
          alt="Brand Logo"
          className="w-40 object-contain absolute mx-11 mt-11"
          style={{ height: 'auto', width: '10rem' }}
        />
        <Image
          src={loginBG}
          alt=""
          placeholder="blur"
          className="h-full mx-auto"
          style={{ objectFit: 'cover', height: 'auto', width: 'auto' }}
        />
      </div>
      <div className="flex justify-center items-center grow h-full">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
