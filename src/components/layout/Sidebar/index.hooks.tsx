import { useRouter } from 'next/router';

import { ArrowRounded, Book, Bookmark } from '@/components/icons';
import { useLayoutContext } from '@/contexts/LayoutContext';

const useSidebar = () => {
  const { isCollapsed } = useLayoutContext();
  const location = useRouter();

  const isActive = (path: string): boolean => location.pathname.startsWith(path);
  const menus = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: <Book />,
    },
    {
      path: '/crud-example',
      name: 'CRUD Example',
      icon: <ArrowRounded />,
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      icon: <Bookmark />,
    },
  ];

  return {
    isCollapsed,
    menus,
    isActive,
  };
};

export default useSidebar;
