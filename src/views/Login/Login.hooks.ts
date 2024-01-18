import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ENDPOINT } from '@/constants/apiURL';
import HTTP_CODE from '@/constants/httpCode';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePostData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';

import { saveToken } from './Login.helpers';
import loginSchema from './Login.schemas';
import type { LoginResponse, LoginSchema } from './Login.types';

const useLogin = () => {
  const router = useRouter();
  const toaster = useToaster();
  const { isAuthenticated, profile } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated && profile) {
      toaster.show('You are already logged in');
      router.push('/dashboard');
    }
  }, [isAuthenticated, profile, router, toaster]);

  const onAfterLogin = () => {
    toaster.success('Successfully logged in');
    const { returnUrl } = router.query;
    router.push(returnUrl ? String(returnUrl) : '/dashboard');
  };

  const {
    mutate: mutateSubmit,
    isLoading: isSubmitting,
  } = usePostData<LoginResponse>(
    ['loginPost'],
    ENDPOINT.IDENTITY.LOGIN,
    {
      options: {
        onSuccess: (data) => {
          saveToken(data);
          onAfterLogin();
        },
        onError: (error) => {
          const { response } = error || {};
          const { data } = response || {};
          const { message, code, payload } = data || {};
          if (code === HTTP_CODE.badRequest && payload) {
            (payload || []).forEach((el) => {
              const { propertyName, message: payloadMessage } = el;
              setError(
                `${propertyName.charAt(0).toLowerCase()}${propertyName.slice(
                  1,
                )}` as 'root',
                { type: 'custom', message: payloadMessage },
              );
            });
            return;
          }
          toaster.error(message || 'Terjadi kesalahan pada server');
        },
      },
    },
  );

  const onSubmit = (data: LoginSchema) => {
    mutateSubmit(data);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    control,
    errors,
    handleSubmit,
    isSubmitting,
    register,
    showPassword,
    toggleShowPassword,
    onSubmit,
  };
};

export default useLogin;
