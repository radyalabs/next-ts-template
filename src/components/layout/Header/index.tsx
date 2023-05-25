import React from 'react';
import Link from 'next/link';

import { Menu, MenuOpen } from '@mui/icons-material';

import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';

import useHeader from './index.hooks';

const Header = () => {
  const {
    isCollapsed,
    toggleCollapsed,
  } = useHeader();
  return (
    <nav className="w-full bg-primary-500 py-2 px-4 shadow fixed z-10">
      <div
        className="flex items-center transition-width transition-slowest ease [&>*]:text-white"
      >
        <Button variant="text" onClick={toggleCollapsed} type="button" className={!isCollapsed ? 'ml-64' : 'ml-24'}>
          {!isCollapsed ? <MenuOpen fontSize="large" /> : <Menu fontSize="large" />}
        </Button>
        <Typography
          variant="h5"
          as="span"
          align="left"
          className="font-bold grow"
        >
          Radya Digital CMS
        </Typography>
        <Link href="/logout" className="mr-12">
          <Button variant="text" className="text-white">Logout</Button>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
