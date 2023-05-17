import type { ReactNode } from 'react';

import type ButtonProps from '@/components/base/Button/index.types';

export interface DropdownButtonProps extends ButtonProps {
  buttonType?: 'button' | 'dots';
  menuItems?: MenuItem[];
}

export interface MenuItem {
  label: ReactNode;
  danger?: boolean;
  onClick: (data?: string) => void;
}
