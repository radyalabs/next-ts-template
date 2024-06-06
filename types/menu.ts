import type { ReactNode } from 'react';

export interface Menu {
  id: string;
  path: string;
  name: string;
  icon: ReactNode,
  subMenu?: Menu[];
}
