import MUIPopover from '@mui/material/Popover';

import Button from '@/components/base/Button';
import { IcX } from '@/components/icons';
import { noop } from '@/utils';

import type { PopoverProps } from './index.types';

const Popover = (props: PopoverProps) => {
  const {
    anchorEl,
    anchorOrigin = {
      vertical: 'bottom',
      horizontal: 'left',
    },
    children,
    className = '',
    closable = false,
    disableRestoreFocus = false,
    open,
    transformOrigin = {
      vertical: 'top',
      horizontal: 'center',
    },
    onClose = noop,
  } = props;
  return (
    <MUIPopover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      className={className}
      classes={{ paper: 'rounded-2xl px-6 py-4' }}
      disableRestoreFocus={disableRestoreFocus}
      sx={disableRestoreFocus ? {
        pointerEvents: 'none',
      } : {}}
    >
      {closable && (
        <div className="flex justify-end">
          <Button variant="text" className="p-0 h-6" onClick={onClose}>
            <IcX className="[&>*]:fill-n-7" />
          </Button>
        </div>
      )}
      {children}
    </MUIPopover>
  );
};

export default Popover;
