'use client';

import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Button from '@/components/base/Button';
import Popover from '@/components/base/Popover';
import Typography from '@/components/base/Typography';
import { IcLogout } from '@/components/icons';
import { stringToAcronym } from '@/utils';

import useAccountButton from './index.hooks';

const AccountButton = () => {
  const {
    anchorEl,
    fullName,
    open,
    profilePictureUri,
    handleClosePopover,
    handleLogout,
    handleOpenPopover,
  } = useAccountButton();
  return (
    <>
      <Button variant="text" className="border-0 h-11 p-2" onClick={handleOpenPopover}>
        <Typography className="font-medium">
          {fullName}
        </Typography>
        <Avatar
          className="bg-primary-200 text-lg text-primary-500 font-secondary font-bold"
          src={profilePictureUri}
        >
          {!profilePictureUri ? stringToAcronym(fullName) : ''}
        </Avatar>
      </Button>
      <Popover anchorEl={anchorEl} open={open} onClose={handleClosePopover} noPadding className="pt-4 px-2.5 min-w-64">
        <div className="flex gap-3 items-center pb-2">
          <Avatar
            className="bg-primary-200 text-lg text-primary-500 font-secondary font-bold"
            src={profilePictureUri}
          >
            {!profilePictureUri ? stringToAcronym(fullName) : ''}
          </Avatar>
          <Typography className="font-medium">
            {fullName}
          </Typography>
        </div>
        <Divider />
        <List>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon><IcLogout className="fill-danger-500" /></ListItemIcon>
            <ListItemText primary="Logout" className="text-danger-500" />
          </ListItemButton>
        </List>
      </Popover>
    </>
  );
};

export default AccountButton;
