import { useRouter } from 'next/router';

import { useAuthContext } from '@/contexts/AuthContext';
import { useLayoutContext } from '@/contexts/LayoutContext';

const useHeader = () => {
  const router = useRouter();
  const {
    isCollapsed,
    toggleCollapsed,
  } = useLayoutContext();
  const { profile } = useAuthContext();

  const handleLogout = () => {
    router.push('/logout');
  };

  return {
    isCollapsed,
    profile,
    toggleCollapsed,
    handleLogout,
  };
};

export default useHeader;
