import React from 'react';
import Image from 'next/image';

import logo from '@/assets/brand_light_secondary.png';
import illustration from '@/assets/login_illustration.svg';
import Button from '@/components/base/Button';
import TextField from '@/components/base/Textfield';
import Typography from '@/components/base/Typography';
import { APP_DESCRIPTION, APP_TITLE } from '@/constants/config';

import useLogin from './index.hooks';

const Login = () => {
  const {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    onSubmit,
  } = useLogin();
  return (
    <section className="text-gray-600 body-font font-sans pt-24 px-24 relative">
      <div
        className="container mb-24 flex drop-shadow-xl min-h-full bg-white rounded-xl max-w-6xl mx-auto"
      >
        <div
          className="bg-primary-500 w-1/2 rounded-xl flex flex-col justify-between m-6 min-h-[600px] p-6"
        >
          <div>
            <Typography
              variant="h3"
              as="h1"
              align="center"
              className="text-white font-bold"
            >
              {APP_TITLE}
            </Typography>
            <Typography
              variant="subtitle1"
              as="h2"
              align="center"
              className="text-white"
            >
              {APP_DESCRIPTION}
            </Typography>
          </div>
          <div className="bg-neutral-100/10 p-8 rounded-xl mx-auto">
            <Image src={illustration} alt="" width={300} className="mx-auto" priority />
          </div>
          <Image src={logo} alt="" width={250} className="mx-auto" />
        </div>
        <div className="flex flex-col justify-between items-center w-1/2 rounded-xl m-6 p-6">
          <div className="w-full">
            <Typography
              variant="h3"
              as="h1"
              align="center"
              className="font-bold"
            >
              Sign In
            </Typography>
            <Typography
              variant="subtitle1"
              as="h2"
              align="center"
            >
              Welcome back!
            </Typography>
            <form className="w-full my-16" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Username"
                message={errors.userId && errors.userId.message}
                error={!!errors.userId}
                {...register('userId')}
                block
              />
              <TextField
                label="Password"
                message={errors.password && errors.password.message}
                error={!!errors.password}
                {...register('password')}
                type="password"
                block
              />
            </form>
            <Button
              className="w-full"
              color="primary"
              onClick={handleSubmit(onSubmit)}
              loading={isSubmitting}
            >
              Login
            </Button>
          </div>
          <div>
            <p className="text-center">Copyright &#169; 2023 Radya Digital</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
