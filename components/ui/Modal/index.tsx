import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Button from '@/components/base/Button';
import Typography from '@/components/base/Typography';
import { IcX } from '@/components/icons';
import { noop } from '@/utils';

import type { ModalChildrenProps, ModalProps } from './index.types';

const Modal = (props: ModalProps) => {
  const {
    children,
    closable = true,
    fullWidth = true,
    open,
    title = '',
    width,
    onClose = noop,
  } = props;
  const parsedWidth = (width
    && (typeof width === 'string' ? width : `${width}px`)) || '';
  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{
        root: 'font-secondary',
        paper: 'font-secondary',
      }}
      PaperProps={{ sx: { width: parsedWidth, maxWidth: parsedWidth } }}
      container={() => document.getElementById('__next')}
      fullWidth={fullWidth}
    >
      <DialogTitle className="font-secondary flex justify-between p-5">
        <Typography variant="title" className="font-semibold mr-8">{title}</Typography>
        {closable && (
          <Button variant="text" className="text-gray-500 p-0 h-6" onClick={onClose}>
            <IcX className="fill-n-7" />
          </Button>
        )}
      </DialogTitle>
      {children}
    </Dialog>
  );
};

const ModalContent = (props: ModalChildrenProps) => {
  const {
    children,
    className = '',
  } = props;
  return (
    <DialogContent dividers className={`p-5 pb-7 ${className}`}>
      {children}
    </DialogContent>
  );
};

const ModalFooter = (props: ModalChildrenProps) => {
  const {
    children,
    className = '',
  } = props;
  return (
    <DialogActions className={`p-4 ${className}`}>
      {children}
    </DialogActions>
  );
};

Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
