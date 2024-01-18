import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import SnackbarContent from '@mui/material/SnackbarContent';

import type { ToasterProps } from './index.types';

import styles from './index.module.scss';

const Toaster = (props: ToasterProps) => {
  const {
    context = 'default',
    message = '',
  } = props;
  const containerStyle = [styles.container];
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open
    >
      {context === 'default' ? (
        <SnackbarContent message={message} className={containerStyle.join(' ')} />
      ) : (
        <Alert
          severity={context}
          className={containerStyle.join(' ')}
          sx={{ minWidth: '320px' }}
          variant="filled"
        >
          {message}
        </Alert>
      )}
    </Snackbar>
  );
};

export default Toaster;
