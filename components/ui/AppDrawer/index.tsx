import React from 'react';
import Link from 'next/link';

import Apps from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';

import Button from '@/components/base/Button';
import Paper from '@/components/base/Paper';
import Typography from '@/components/base/Typography';
import { APP_LIST } from '@/components/ui/AppDrawer/index.constants';

import useAppDrawer from './index.hooks';

const AppDrawer = () => {
  const {
    anchorEl,
    open,
    handleClick,
    handleClose,
  } = useAppDrawer();

  return (
    <>
      <IconButton onClick={handleClick} className="hover:bg-n-4">
        <Apps className="fill-n-12" />
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{ paper: 'rounded-2xl' }}
      >
        <div className="bg-n-3 p-2 w-72 max-h-64 min-h-32 [&>*]:rounded-xl">
          <Paper className="p-2">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {APP_LIST.map((el) => (
                <Link href={el.url} key={el.url} target="_blank">
                  <div className="w-20">
                    <Button
                      className="flex flex-col gap-1 items-center min-w-20 w-20 max-w-20 min-h-24 bg-transparent p-1 hover:bg-n-4 group"
                    >
                      <Avatar>{el.icon}</Avatar>
                      <Typography
                        align="center"
                        className="max-w-20 truncate text-ellipsis group-hover:text-wrap group-hover:text-clip text-sm"
                      >
                        {el.name}
                      </Typography>
                    </Button>
                  </div>

                </Link>
              ))}
            </div>
          </Paper>
        </div>
      </Popover>
    </>
  );
};

export default AppDrawer;
