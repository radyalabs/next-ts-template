import {
  IcDashboard,
  IcPerson,
} from '@/components/icons';
import type { Menu } from '@/types/menu';

const MENUS: Menu[] = [
  {
    id: '1',
    path: '/dashboard',
    name: 'Dashboard',
    icon: <IcDashboard />,
  },
  {
    id: '2',
    path: '/user-access-management',
    name: 'User Access Management',
    icon: <IcPerson />,
  },
];

export default MENUS;
