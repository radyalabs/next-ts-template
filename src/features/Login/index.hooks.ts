import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { ENDPOINT } from '@/constants/apiURL';
import { APP_TOKEN_KEY } from '@/constants/config';
import type { BaseResponse } from '@/constants/response';
import type { LoginResponse } from '@/features/Login/index.types';
import { usePostData } from '@/hooks/useMutateData';

const useLogin = () => {
  const router = useRouter();

  const schema = z.object({
    userId: z.string(),
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
        },
      },
    },
  );

  const onSubmit = (data: LoginSchema) => {
    mutateSubmit(data);
    return router.push('/');
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
