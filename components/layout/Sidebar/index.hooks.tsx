import MENUS from '@/constants/menu';
import { useLayoutContext } from '@/contexts/LayoutContext';

const useSidebar = () => {
  const { isCollapsed, toggleCollapsed } = useLayoutContext();
  const menus = MENUS;

  return {
    isCollapsed,
    menus,
    toggleCollapsed,
  };
};

export default useSidebar;
