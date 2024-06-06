'use client';

import React, { Fragment } from 'react';
import Image from 'next/image';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import mark from '@/assets/brand_mark_primary.png';
import logo from '@/assets/brand_primary.png';
import Button from '@/components/base/Button';
import { IcHide, IcShow } from '@/components/icons';

import MenuItem from './components/MenuItem';
import useSidebar from './index.hooks';

const Sidebar = () => {
  const {
    isCollapsed,
    menus,
    toggleCollapsed,
  } = useSidebar();
  return (
    <aside
      className={`${!isCollapsed ? 'w-64' : 'w-24'} font-sans fixed h-full drop-shadow-xl z-50 transition-width transition-slowest ease`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto bg-n-1 h-full px-2">
        <div className={`flex justify-between ${!isCollapsed ? 'px-6 py-5' : 'px-2 py-5'}`}>
          <Image
            src={!isCollapsed ? logo : mark}
            alt="Brand Logo"
            className="min-h-11 h-11 w-auto object-contain"
            priority
          />
          <Button variant="text" onClick={toggleCollapsed} type="button" className="p-0 [&>*]:fill-neutral-500">
            {
              !isCollapsed
                ? <IcHide width={15} height={15} />
                : <IcShow width={15} height={15} />
            }
          </Button>
        </div>

        <List
          sx={{ width: '100%' }}
          component="nav"
        >
          {menus.map((menu) => (
            !menu.subMenu ? (
              <MenuItem menu={menu} key={menu.id} />
            ) : (
              <Fragment key={menu.id}>
                <ListItemButton
                  classes={{
                    root: 'rounded-2xl mb-2 justify-center whitespace-nowrap text-neutral-700 text-base',
                  }}
                >
                  {!isCollapsed && (
                    <ListItemText
                      classes={{ primary: 'text-sm font-secondary' }}
                      primary={menu.name}
                    />
                  )}
                </ListItemButton>
                <List
                  component="div"
                  disablePadding
                  className="mb-5"
                >
                  {
                    (menu.subMenu || []).map((submenu) => (
                      <MenuItem menu={submenu} key={submenu.id} />
                    ))
                  }
                </List>
              </Fragment>
            )
          ))}
        </List>
      </div>
    </aside>
  );
};
export default Sidebar;
