import { useRouter } from 'next/router';

import { ArrowRounded, Book, Bookmark } from '@/components/icons';
import { useLayoutContext } from '@/contexts/LayoutContext';

const useSidebar = () => {
  const { isCollapsed } = useLayoutContext();
  const location = useRouter();

  const isActive = (path: string): boolean => location.pathname === path;
  const menus = [
    {
      path: '/',
      name: 'List',
      icon: <Book />,
    },
    {
      path: '/compare',
      name: 'Compare',
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
