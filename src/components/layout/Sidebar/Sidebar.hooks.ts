import { useRouter } from 'next/router';

import { useLayoutContext } from '@/contexts/LayoutContext/LayoutContext';

const useSidebar = () => {
  const { isCollapsed } = useLayoutContext();
  const location = useRouter();

  const isActive = (path: string): boolean => location.pathname === path;

  return {
    isCollapsed,
    isActive,
  };
};

export default useSidebar;
