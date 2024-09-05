'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Typography from '@/components/base/Typography';
import AccountButton from '@/components/ui/AccountButton';
import { APP_TITLE } from '@/constants/config';
import { useLayoutContext } from '@/contexts/LayoutContext';

const Header = () => {
  const {
    isCollapsed,
  } = useLayoutContext();

  return (
    <AppBar className="w-full bg-n-1 py-1 shadow fixed z-30">
      <Toolbar className={`transition-width transition-slowest ease px-7 [&>*]:text-n-13 ${!isCollapsed ? 'ml-72' : 'ml-24'} gap-2`}>
        <Typography
          as="span"
          align="left"
          className="font-medium grow text-2xl"
          type="primary"
        >
          {APP_TITLE}
        </Typography>
        <AccountButton />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
