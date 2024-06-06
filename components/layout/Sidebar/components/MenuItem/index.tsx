'use client';

import Link from 'next/link';

import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Tooltip from '@/components/base/Tooltip';
import { IcDropdown } from '@/components/icons';

import useMenuItem from './index.hooks';
import type { MenuItemProps } from './index.types';

const MenuItem = (props: MenuItemProps) => {
  const {
    isCollapsed,
    open,
    handleClick,
    isActive,
  } = useMenuItem(props);
  const { menu } = props;
  const {
    path, icon, name,
  } = menu;
  return (
    <Tooltip title={isCollapsed ? menu.name : ''} placement="right">
      {!menu.subMenu ? (
        <Link
          href={path || ''}
          className="text-base font-normal no-underline whitespace-nowrap"
        >
          <ListItemButton
            classes={{
              root: `rounded-2xl mb-2 justify-center group ${isActive(menu.path || '')
                ? 'bg-primary-500 shadow-inner text-primary-50'
                : 'text-n-8 hover:bg-primary-50 hover:text-primary-500 hover:shadow-inner'}`,
            }}
          >
            <ListItemIcon
              classes={{
                root: `${isCollapsed ? 'justify-center' : ''} ${isActive(menu.path || '')
                  ? '[&>*]:fill-n-1'
                  : '[&>*]:fill-n-8 [&>*]:group-hover:fill-primary-500'
                } min-w-0 ${!isCollapsed ? 'mr-4' : ''}`,
              }}
            >
              {icon}
            </ListItemIcon>
            {!isCollapsed && (
              <ListItemText
                primary={name}
                classes={{ primary: 'text-base' }}
              />
            )}
          </ListItemButton>
        </Link>
      ) : (
        <>
          <ListItemButton
            classes={{
              root: `rounded-2xl mb-2 justify-center group ${isActive(menu.path || '')
                ? 'bg-primary-500 shadow-inner text-primary-50'
                : 'text-n-8 hover:bg-primary-50 hover:text-primary-500 hover:shadow-inner'}`,
            }}
            onClick={() => handleClick()}
          >
            <ListItemIcon
              classes={{
                root: `${isCollapsed ? 'justify-center' : ''} ${isActive(menu.path || '')
                  ? '[&>*]:fill-n-1'
                  : '[&>*]:fill-n-8 [&>*]:group-hover:fill-primary-500'
                } min-w-0 ${!isCollapsed ? 'mr-4' : ''}`,
              }}
            >
              {icon}
            </ListItemIcon>
            {!isCollapsed && (
              <>
                <ListItemText
                  primary={menu.name}
                  classes={{ primary: 'text-base' }}
                />
                <IcDropdown
                  className={`${isActive(menu.path || '') ? 'fill-n-1' : 'fill-n-8'} 
                    ${open && 'rotate-180'} transition-transform
                  `}
                />
              </>
            )}
          </ListItemButton>
          {!isCollapsed && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List
                component="div"
                disablePadding
              >
                {
                  (menu.subMenu || []).map((submenu) => (
                    <Link
                      key={submenu.id}
                      href={submenu.path || ''}
                      className="text-base font-normal no-underline whitespace-nowrap"
                    >
                      <ListItemButton
                        classes={{
                          root: `rounded-2xl mb-2 group ${isActive(submenu.path || '')
                            ? 'text-primary-500'
                            : 'text-n-8 hover:bg-primary-50 hover:text-primary-500 hover:shadow-inner'}`,
                        }}
                      >
                        <ul className="m-0 py-0 px-12">
                          <li>
                            <ListItemText
                              primary={submenu.name}
                              classes={{ primary: 'text-base' }}
                            />
                          </li>
                        </ul>
                      </ListItemButton>
                    </Link>
                  ))
                }
              </List>
            </Collapse>
          )}
        </>
      )}
    </Tooltip>
  );
};

export default MenuItem;
