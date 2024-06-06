import { useState } from 'react';

import type { OrganizationSwitcherProps } from '@/components/ui/OrganizationSwitcher/index.types';
import { ENDPOINT } from '@/constants/apiURL';
import { useAuthContext } from '@/contexts/AuthContext';
import { usePostData } from '@/hooks/useMutateData';
import useToaster from '@/hooks/useToaster';
import { noop } from '@/utils';

const useOrganizationSwitcher = (props: OrganizationSwitcherProps) => {
  const {
    onClose = noop,
    onSuccessSwitch = noop,
  } = props;

  const toaster = useToaster();
  const { profile } = useAuthContext();
  const { organizations, selectedOrganization, userId } = profile || {};
  const [selectedOrg, setSelectedOrg] = useState('');

  const handleSelectOrg = (orgId: string) => {
    setSelectedOrg(orgId);
  };

  const {
    mutate: mutateSwitch,
    isLoading: isMutatingSwitch,
  } = usePostData(
    ['organizationSwitch'],
    ENDPOINT.IDENTITY.SWITCH_ORG,
    {
      options: {
        onSuccess: () => {
          onSuccessSwitch();
          localStorage.setItem('defaultOrg', JSON.stringify({ userId, orgId: selectedOrg }));
        },
        onError: (error) => {
          const { response } = error || {};
          const { data } = response || {};
          const { message } = data || {};
          toaster.error(message || 'Terjadi kesalahan pada server');
        },
      },
    },
  );

  const handleClickCancel = () => {
    onClose();
  };

  const handleClickSwitcher = () => {
    mutateSwitch({ organizationId: selectedOrg });
  };

  return {
    isMutatingSwitch,
    organizations,
    selectedOrg,
    selectedOrganization,
    handleClickCancel,
    handleClickSwitcher,
    handleSelectOrg,
  };
};

export default useOrganizationSwitcher;
