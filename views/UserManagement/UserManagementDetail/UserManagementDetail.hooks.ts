import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { ENDPOINT } from '@/constants/apiURL';
import useGetData from '@/hooks/useGetData';
import type { User } from '@/types/user';
import userNormalizer from '@/views/UserManagement/normalizers/userNormalizer';

import applicationScopesNormalizer
  from '../normalizers/applicationScopesNormalizer';
import type {
  ApplicationScopes,
} from '../types/applicationScope';

const useUserManagementDetail = (id: string) => {
  const router = useRouter();
  const { USER_MGMT } = ENDPOINT;
  const { USERS_BY_ID, SCOPES } = USER_MGMT;

  const {
    data: userData,
    isLoading: isLoadingUserData,
  } = useGetData<User>(
    ['userDetail', String(id)],
    USERS_BY_ID(String(id)),
    {
      normalizer: userNormalizer,
      options: {
        enabled: !!id,
      },
    },
  );

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

  const { scopes: userScopes = [] } = userData || {};

  const filteredUserScopes = useMemo(() => (
    scopes.map((appScope) => {
      const val = appScope.scopes.filter((scope) => userScopes.includes(scope.name));
      return { ...appScope, scopes: val };
    })
  ), [scopes, userScopes]);

  const handleBack = () => {
    router.back();
  };

  return {
    filteredUserScopes,
    isLoadingScopes,
    isLoadingUserData,
    userData,
    handleBack,
  };
};

export default useUserManagementDetail;
