import { useState } from 'react';

import {
  KeyboardArrowDown, MoreVert,
} from '@mui/icons-material';
import { IconButton, MenuItem } from '@mui/material';
import Menu from '@mui/material/Menu';
import type { MouseEvent } from 'react';

import Button from '@/components/base/Button';
import type { DropdownButtonProps } from '@/components/ui/DropdownButton/index.types';

const DropdownButton = (props: DropdownButtonProps) => {
  const { children, buttonType = 'button', menuItems = [] } = props;
  const keyedMenuIcon = menuItems.map((el) => {
    const newVal = el;
    newVal.key = new Date().getTime().toString();
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
        <Button variant="outline" {...props} endIcon={<KeyboardArrowDown />} onClick={handleClick}>{children}</Button>
      ) : (
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
      )}
      <Menu
        classes={{ root: 'mt-1', paper: 'min-w-[180px] shadow rounded-xl' }}
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
        { keyedMenuIcon.map((item) => (
          <MenuItem
            key={item.key}
            classes={{ root: `text-sm flex justify-start gap-2 ${item.danger && 'text-danger-500'}` }}
            onClick={() => {
              item.onClick();
              handleClose();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownButton;
