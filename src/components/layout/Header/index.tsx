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
    <nav className={`bg-primary-500 py-2 px-4 shadow fixed w-full z-10 ${!isCollapsed ? 'pl-64' : 'pl-24'}`}>
      <div
        className="container flex flex-wrap items-center [&>*]:mr-5 transition-width transition-slowest ease [&>*]:text-white"
      >
        <Button variant="text" onClick={toggleCollapsed} type="button">
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
        <Link href="/logout">
          <Button variant="text" className="text-white">Logout</Button>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
