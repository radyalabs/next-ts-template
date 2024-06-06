import { useState } from 'react';

import Divider from '@mui/material/Divider/';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { MouseEvent } from 'react';

import Button from '@/components/base/Button';
import { IcDropdown, IcMore } from '@/components/icons';
import type { DropdownButtonProps } from '@/components/ui/DropdownButton/index.types';

const DropdownButton = (props: DropdownButtonProps) => {
  const {
    children,
    buttonType = 'button',
    menuItems = [],
    dropdownIcon = true,
  } = props;
  const keyedMenuIcon = menuItems.map((el, i) => {
    const newVal = el;
    newVal.key = String(i);
    return newVal;
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {buttonType === 'button' ? (
        <Button variant="outline" {...props} endIcon={dropdownIcon && <IcDropdown />} onClick={handleClick}>{children}</Button>
      ) : (
        <IconButton onClick={handleClick}>
          <IcMore />
        </IconButton>
      )}
      <Menu
        classes={{ root: 'mt-2', paper: 'min-w-[180px] shadow rounded-xl font-secondary' }}
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        { keyedMenuIcon.map((item, i) => (
          <div key={item.key}>
            <MenuItem
              classes={{ root: `font-sans text-base flex justify-start gap-2 ${item.danger && 'text-danger-500'}` }}
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                }
                handleClose();
              }}
            >
              {item.label}
            </MenuItem>
            {i < keyedMenuIcon.length - 1 && (
              <Divider className="m-0" />
            )}
          </div>
        ))}
      </Menu>
    </>
  );
};

export default DropdownButton;
