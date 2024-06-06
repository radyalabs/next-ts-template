import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { useLayoutContext } from '@/contexts/LayoutContext';

import type { MenuItemProps } from './index.types';

const useMenuItem = (props: MenuItemProps) => {
  const { menu } = props;
  const { isCollapsed } = useLayoutContext();
  const pathname = usePathname() || '';

  const isActive = (path: string): boolean => pathname.startsWith(path);
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
