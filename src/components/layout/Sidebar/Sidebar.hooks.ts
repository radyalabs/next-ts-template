import { useLayoutContext } from '@/contexts/LayoutContext/LayoutContext';
import {useRouter} from 'next/router';

const useSidebar = () => {
  const { isCollapsed } = useLayoutContext();
  const location = useRouter();

  const isActive = (path: string): boolean => location.pathname === path;

  return { isCollapsed, isActive };
};

export default useSidebar;
