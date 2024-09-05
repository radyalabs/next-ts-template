import { type MouseEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthContext } from '@/contexts/AuthContext';
import { useModalContext } from '@/contexts/ModalContext';

const useAccountButton = () => {
  const router = useRouter();
  const { profile } = useAuthContext();
  const modal = useModalContext();
  const {
    fullName = '',
    profilePictureUri,
  } = profile || {};

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenPopover = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    modal.confirm({
      title: 'Log out confirmation',
      content: 'Are you sure you want to log out?',
      danger: true,
      buttonProps: {
        confirm: {
          label: 'Log out',
        },
      },
      onConfirm: () => {
        modal.closeConfirm();
        router.push('/logout');
      },
      onCancel: () => modal.closeConfirm(),
    });
  };

  return {
    anchorEl,
    fullName,
    open,
    profilePictureUri,
    handleClosePopover,
    handleLogout,
    handleOpenPopover,
  };
};

export default useAccountButton;
