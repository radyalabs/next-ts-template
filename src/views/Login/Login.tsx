'use client';

import Link from 'next/link';

import { Controller } from 'react-hook-form';

import Button from '@/components/base/Button';
import TextField from '@/components/base/Textfield';
import Typography from '@/components/base/Typography';
import { IcEyeOpen, IcEyesClose } from '@/components/icons';
import { APP_TITLE } from '@/constants/config';
import { noop } from '@/utils';

import useLogin from './Login.hooks';

const Login = () => {
  const {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    showPassword,
    toggleShowPassword,
    onSubmit,
  } = useLogin();

  return (
    <div className="w-[400px]">
      <Typography variant="headline" as="h1" size="large">
        Sign In to
        <br />
        {APP_TITLE}
      </Typography>
      <form
        className="w-full flex flex-col gap-8 my-8"
        onSubmit={isSubmitting ? noop : handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="username"
          defaultValue=""
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              onChange={onChange}
              inlineLabel="Username"
              block
              value={value}
              ref={ref}
              autoFocus
              message={errors.username && errors.username.message}
              error={!!errors.username}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          defaultValue=""
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              autoComplete="new-password"
              onChange={onChange}
              inlineLabel="Password"
              block
              value={value}
              ref={ref}
              message={errors.password && errors.password.message}
              error={!!errors.password}
              type={showPassword ? 'text' : 'password'}
              appendObject={(
                <Button
                  variant="text"
                  className="p-0 [&>*]:fill-n-7"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <IcEyeOpen /> : <IcEyesClose />}
                </Button>
              )}
            />
          )}
        />
        <div className="flex justify-end">
          <Link href="/forgot-password">
            <Button variant="text" className="p-0 text-n-8">
              Forgot Password?
            </Button>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            className="w-full"
            color="primary"
            size="small"
            type="submit"
            loading={isSubmitting}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
