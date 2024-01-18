import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';

import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcX } from '@/components/icons';
import { noop } from '@/utils';

import type { ConfirmDialogProps } from './index.types';

const ConfirmDialog = (props: ConfirmDialogProps) => {
  const {
    buttonProps,
    content,
    danger = false,
    open,
    title = '',
    showCancel = true,
    showCloseBtn = true,
    onCancel = noop,
    onClose = noop,
    onConfirm = noop,
  } = props;
  const { confirm, cancel } = buttonProps || {};
  const {
    label: confirmLabel = 'OK',
    loading: confirmLoading = false,
    disabled: confirmDisabled = false,
  } = confirm || {};
  const {
    label: cancelLabel = 'Cancel',
    loading: cancelLoading = false,
    disabled: cancelDisabled = false,
  } = cancel || {};

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ root: 'font-sans', paper: 'min-w-[411px]' }}
      container={() => document.getElementById('__next')}
    >
      <DialogTitle className="font-sans flex justify-between p-4">
        <Typography variant="title" className="text-xl font-semibold mr-8">{title}</Typography>
        {showCloseBtn && (
          <Button variant="text" className="text-gray-500 p-0 h-6" onClick={onClose}>
            <IcX className="fill-n-7" />
          </Button>
        )}
      </DialogTitle>
      <Divider />
      <DialogContent className="py-10">
        <DialogContentText className="text-neutral-800">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions className="flex justify-end gap-2 p-4">
        {showCancel && (
          <Button
            onClick={onCancel}
            loading={cancelLoading}
            disabled={cancelDisabled}
            color={danger ? 'default' : 'primary'}
            variant={danger ? 'text' : 'outline'}
          >
            {cancelLabel}
          </Button>
        )}
        <Button
          onClick={onConfirm}
          loading={confirmLoading}
          disabled={confirmDisabled}
          color={danger ? 'danger' : 'primary'}
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmDialog;
