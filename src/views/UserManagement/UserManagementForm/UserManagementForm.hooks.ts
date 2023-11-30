import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

import { zodResolver } from '@hookform/resolvers/zod';
import type { ChangeEvent } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { ENDPOINT } from '@/constants/apiURL';
import HTTP_CODE from '@/constants/httpCode';
import { useModalContext } from '@/contexts/ModalContext';
import useGetData from '@/hooks/useGetData';
import { useMutateData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';
import type { User } from '@/types/user';

import applicationScopesNormalizer from '../normalizers/applicationScopesNormalizer';
import userNormalizer from '../normalizers/userNormalizer';
import type { ApplicationScopes } from '../types/applicationScope';

const useUserManagementForm = () => {
  const router = useRouter();
  const { query } = router;
  const modal = useModalContext();
  const toaster = useToaster();
  const { USER_MGMT } = ENDPOINT;
  const { SCOPES } = USER_MGMT;
  const [checkedScopes, setCheckedScopes] = useState<string[]>([]);
  const [checkAll, setCheckAll] = useState<boolean[]>([]);
  const isEdit = useMemo(() => !!query.id, [query]);
  const pageTitle = useMemo(() => (isEdit ? 'Edit' : 'Save'), [isEdit]);

  const schema = z.object({
    email:
      z.string().email({ message: 'Invalid email format' })
        .and(z.string().min(1, { message: 'Email has not been filled in' })),
    fullName: z.string().min(1, { message: 'Password has not been filled in' }),
  });

  type UserFormSchema = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm<UserFormSchema>({
    resolver: zodResolver(schema),
  });

  const {
    data: scopes = [],
    isLoading: isLoadingScopes,
  } = useGetData<ApplicationScopes>(
    ['userScopes'],
    SCOPES,
    {
      normalizer: applicationScopesNormalizer,
    },
  );

  const handleBack = () => {
    router.back();
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setCheckedScopes([...checkedScopes, id]);
    if (!checked) {
      setCheckedScopes(checkedScopes.filter((item) => item !== id));
    }
  };

  const handleCheckAll = (i: number) => {
    const checkedAll = [...checkAll];
    checkedAll[i] = !checkedAll[i];
    setCheckAll(checkedAll);
    setCheckedScopes([...checkedScopes, ...scopes[i].scopes.map((scope) => scope.name)]);
    if (checkAll[i]) {
      const newVal = checkedScopes.filter(
        (val) => !scopes[i].scopes.flatMap((scope) => scope.name).includes(val),
      );
      setCheckedScopes(newVal);
    }
  };

  const {
    data: userData,
  } = useGetData<User>(
    ['userDetail', String(query.id)],
    USER_MGMT.USERS_BY_ID(String(query.id)),
    {
      normalizer: userNormalizer,
      options: {
        enabled: isEdit,
      },
    },
  );

  const { email = '', fullName = '', scopes: userScopes } = userData || {};

  useEffect(() => {
    setValue('email', email);
    setValue('fullName', fullName);
  }, [email, fullName, setValue]);

  useEffect(() => {
    if (userScopes) {
      setCheckedScopes(userScopes || []);
    }
  }, [userScopes]);

  const {
    mutate: mutateSubmit,
    isLoading: isSubmitting,
  } = useMutateData(
    ['loginPost'],
    !isEdit ? USER_MGMT.USERS : USER_MGMT.USERS_BY_ID(String(query.id)),
    !isEdit ? 'post' : 'put',
    {
      options: {
        onSuccess: () => {
          modal.success({
            title: 'Successfully',
            content: 'Your data has been successfully saved',
            onConfirm: () => {
              modal.closeConfirm();
              router.push('/user-access-management');
            },
          });
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

  const onSubmit = (data: UserFormSchema) => {
    mutateSubmit({ ...data, scopes: checkedScopes });
  };

  return {
    checkAll,
    checkedScopes,
    errors,
    handleSubmit,
    isEdit,
    isLoadingScopes,
    isSubmitting,
    pageTitle,
    register,
    scopes,
    handleBack,
    handleCheck,
    handleCheckAll,
    onSubmit,
  };
};

export default useUserManagementForm;
