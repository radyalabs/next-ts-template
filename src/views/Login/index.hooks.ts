import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ENDPOINT } from '@/constants/apiURL';
import { APP_REFRESH_KEY, APP_TOKEN_KEY } from '@/constants/config';
import { useToasterContext } from '@/contexts/ToasterContext';
import { usePostData } from '@/hooks/useMutateData';

import type { LoginResponse } from './index.types';

const useLogin = () => {
  const router = useRouter();
  const toaster = useToasterContext();

  const schema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
  });

  type LoginSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(schema),
  });

  const {
    mutate: mutateSubmit,
    isLoading: isSubmitting,
  } = usePostData<LoginResponse>(
    ['loginPost'],
    ENDPOINT.IDENTITY.LOGIN,
    {
      options: {
        onSuccess: (data) => {
          const {
            accessToken, expiry, refreshToken,
          } = data;
          setCookie(APP_TOKEN_KEY, accessToken, {
            maxAge: expiry,
            sameSite: true,
          });
          setCookie(APP_REFRESH_KEY, refreshToken, {
            maxAge: expiry,
            sameSite: true,
          });
          axios.defaults.headers.common = {
            Authorization: `Bearer ${accessToken}`,
          };
          toaster.show({ message: 'Login berhasil' });
          router.push('/dashboard');
        },
        onError: (error) => {
          toaster.show({ message: error.message, error: true });
        },
      },
    },
  );

  const onSubmit = (data: LoginSchema) => {
    mutateSubmit(data);
  };

  return {
    errors,
    register,
    handleSubmit,
    isSubmitting,
    onSubmit,
  };
};

export default useLogin;
