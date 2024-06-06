import { type MouseEvent, useState } from 'react';

const useAppDrawer = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
  };
};

export default useAppDrawer;
