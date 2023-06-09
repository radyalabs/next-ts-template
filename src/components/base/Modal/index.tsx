import { Box } from '@mui/material';
import MUIModal from '@mui/material/Modal';

import Button from '@/components/base/Button';
import type { ModalProps } from '@/components/base/Modal/index.types';
import Typography from '@/components/base/Typography';
import { Spinner, Xmark } from '@/components/icons';

import styles from './index.module.scss';

const Modal = (props: ModalProps) => {
  const {
    buttonCenter = false,
    buttonConfirm,
    captionButtonConfirm = 'Confirm',
    children,
    disabledButtonConfirm = false,
    isConfirmSubmit = false,
    isLoading = false,
    title,
    size = 'medium',
    withButtonClose = false,
    withIconClose = false,
    onClose,
    onConfirm,
    open = false,
  } = props;

  const modalSize = [styles.modalSize];

  if (size === 'auto') modalSize.push(styles.modalSizeFit);
  if (size === 'small') modalSize.push(styles.modalSizeSmall);
  if (size === 'medium') modalSize.push(styles.modalSizeMedium);
  if (size === 'large') modalSize.push(styles.modalSizeLarge);

  const closeIcon = (
    <button onClick={onClose} type="button" className={styles.closeIcon}>
      <Xmark />
    </button>
  );

  const closeButton = (
    <Button type="button" onClick={onClose}>
      Close
    </Button>
  );

  const confirmButton = (
    <Button
      color={buttonConfirm}
      disabled={disabledButtonConfirm || isLoading}
      type={isConfirmSubmit ? 'submit' : 'button'}
      onClick={onConfirm}
    >
      {isLoading ? <Spinner /> : captionButtonConfirm}
    </Button>
  );

  return (
    <MUIModal
      container={() => document.getElementById('__next') as HTMLElement}
      open={open}
      className={styles.modal}
    >
      <Box className={`${styles.modalBox} ${modalSize.join(' ')}`}>
        <Box className={styles.modalHeader}>
          {title && (
            <Typography variant="h6" as="h1" className={styles.modalTitle}>
              {title}
            </Typography>
          )}
          {withIconClose && closeIcon}
        </Box>

        {children}

        <Box
          className={`${styles.modalFooter} ${
            buttonCenter ? 'justify-center' : 'justify-end'
          }`}
        >
          {buttonConfirm && confirmButton}
          {withButtonClose && closeButton}
        </Box>
      </Box>
    </MUIModal>
  );
};

export default Modal;
