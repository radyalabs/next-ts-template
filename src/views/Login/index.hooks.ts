import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ENDPOINT } from '@/constants/apiURL';
import { APP_TOKEN_KEY } from '@/constants/config';
import { useToasterContext } from '@/contexts/ToasterContext';
import { usePostData } from '@/hooks/useMutateData';
import type { BaseResponse } from '@/types/responses';

import type { LoginResponse } from './index.types';

const useLogin = () => {
  const router = useRouter();
  const toaster = useToasterContext();

  const schema = z.object({
    userId: z.string().min(1),
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
  } = usePostData<BaseResponse<LoginResponse>>(
    ['loginPost'],
    ENDPOINT.AUTH.LOGIN,
    {
      options: {
        onSuccess: (data) => {
          if (data.isSuccess) {
            const { payload } = data || {};
            const {
              token, expirationSeconds,
            } = payload;
            setCookie(APP_TOKEN_KEY, token, {
              maxAge: expirationSeconds,
              sameSite: true,
            });
            axios.defaults.headers.common = {
              Authorization: `Bearer ${token}`,
            };
            toaster.show({ message: 'Login berhasil' });
            router.push('/');
            return;
          }
          toaster.show({ message: 'error ah', error: true });
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
