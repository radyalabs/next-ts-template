import React from 'react';

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
    <nav className="bg-primary-500 py-2 px-4 shadow fixed w-full z-10">
      <div
        className={`container flex flex-wrap items-center [&>*]:mr-5 ${!isCollapsed ? 'ml-64' : 'ml-24'} transition-width transition-slowest ease text-white`}
      >
        <Button variant="text" className="text-white" onClick={toggleCollapsed} type="button">
          {!isCollapsed ? <MenuOpen fontSize="large" /> : <Menu fontSize="large" />}
        </Button>
        <Typography
          variant="h5"
          as="span"
          align="center"
          className="font-bold"
        >
          Radya Digital CMS
        </Typography>
      </div>
    </nav>
  );
};
export default Header;
