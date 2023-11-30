import { useState } from 'react';
import { useRouter } from 'next/router';

import { useLayoutContext } from '@/contexts/LayoutContext';

import type { MenuItemProps } from './index.types';

const useMenuItem = (props: MenuItemProps) => {
  const { menu } = props;
  const { isCollapsed } = useLayoutContext();
  const location = useRouter();

  const isActive = (path: string): boolean => location.pathname.startsWith(path);
  const [open, setOpen] = useState<boolean>(isActive(menu.path));

  const handleClick = () => {
    setOpen(!open);
  };

  return {
    isCollapsed,
    open,
    handleClick,
    isActive,
  };
};

export default useMenuItem;
