import React from 'react';
import Image from 'next/image';

import logo from '@/assets/brand_light_secondary.png';
import illustration from '@/assets/login_illustration.svg';
import { APP_DESCRIPTION, APP_TITLE } from '@/constants/config';

const Login = () => (
  <section
    className="text-gray-600 body-font font-sans pt-24 px-24 relative transition-width transition-slowest ease"
  >
    <div
      className="container mb-24 flex drop-shadow-xl min-h-full min-w-full bg-white rounded-xl"
    >
      <div className="bg-primary-500 w-1/2 rounded-xl flex flex-col justify-between m-6 min-h-[600px] p-6">
        <div>
          <h1 className="text-4xl text-white text-center font-bold">{APP_TITLE}</h1>
          <p className="text-lg text-white text-center">{APP_DESCRIPTION}</p>
        </div>
        <div className="bg-white/20 p-8 rounded-xl">
          <Image src={illustration} alt="" width={300} className="mx-auto" />
        </div>
        <Image src={logo} alt="" width={250} className="mx-auto" />
      </div>
      <div className="flex flex-col justify-between w-1/2 rounded-br-xl m-6 p-6">
        <div>
          <h1 className="text-4xl text-center font-bold">Sign In</h1>
          <p className="text-center">Welcome back!</p>
        </div>
        <div>Content</div>
        <div>
          <p className="text-center">Copyright &#169; 2023 Radya Digital</p>
        </div>
      </div>
    </div>
  </section>
);

export default Login;