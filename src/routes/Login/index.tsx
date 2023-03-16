import React from 'react';
import Image from 'next/image';

import logo from '@/assets/brand_light_secondary.png';

const Login = () => (
  <section
    className="text-gray-600 body-font font-sans pt-20 relative px-12 transition-width transition-slowest ease"
  >
    <div
      className="container mb-24 flex drop-shadow-xl min-h-full min-w-full"
    >
      <div className="bg-primary-500 w-1/2 rounded-tl-xl rounded-bl-xl flex flex-col justify-end p-6 min-h-[600px]">
        <Image src={logo} alt="" width={300} className="mx-auto" />
      </div>
      <div className="flex flex-col justify-between bg-white w-1/2 rounded-tr-xl rounded-br-xl p-6">
        <div>Header</div>
        <div>Content</div>
        <div>Footer</div>
      </div>
    </div>
  </section>
);

export default Login;
