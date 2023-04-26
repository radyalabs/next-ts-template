import { Snackbar, SnackbarContent } from '@mui/material';

import type { ToasterProps } from './index.types';

import styles from './index.module.scss';

const Toaster = (props: ToasterProps) => {
  const {
    autoHideDuration = 3000,
    error = false,
    message = '',
    onClose,
    open = false,
    toasterKey = 'main',
  } = props;
  const containerStyle = [styles.container];
  if (error) containerStyle.push(styles.error);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      autoHideDuration={autoHideDuration}
      key={toasterKey}
      onClose={onClose}
      open={open}
    >
      <SnackbarContent message={message} className={containerStyle.join(' ')} />
    </Snackbar>
  );
};

export default Toaster;
