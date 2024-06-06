import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import ConfirmDialog from '@/components/ui/ConfirmDialog';
import SuccessDialog from '@/components/ui/SuccessDialog';
import { noop } from '@/utils';

import type {
  ConfirmDialogParams,
  ModalContextTypes,
  ModalProviderProps,
} from './ModalContext.types';

const ModalContext = createContext<ModalContextTypes | undefined>(undefined);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [confirmDialogState, setConfirmDialogState] = useState<ConfirmDialogParams>({
    buttonProps: {
      confirm: {
        loading: false,
        disabled: false,
        label: 'Okay',
      },
      cancel: {
        loading: false,
        disabled: false,
        label: 'Cancel',
      },
    },
    content: '',
    danger: false,
    onCancel: noop,
    onClose: noop,
    onConfirm: noop,
    title: '',
    showCancel: true,
    showCloseBtn: true,
  });

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const confirm = useCallback((params: ConfirmDialogParams) => {
    const {
      buttonProps,
      content,
      danger = false,
      title,
      showCancel = true,
      showCloseBtn = false,
      onCancel = noop,
      onClose = noop,
      onConfirm = noop,
    } = params;
    setConfirmDialogState((prevState) => ({
      ...prevState,
      buttonProps,
      content,
      title,
      danger,
      showCancel,
      showCloseBtn,
      onCancel,
      onClose,
      onConfirm,
    }));
    setConfirmOpen(true);
  }, []);

  const setConfirmLoading = (loadingState: boolean) => {
    setConfirmDialogState((prevState) => ({
      ...prevState,
      buttonProps: {
        confirm: {
          loading: loadingState,
        },
      },
    }));
  };

  const closeConfirm = useCallback(() => {
    setConfirmOpen(false);
    setSuccessOpen(false);
  }, []);

  const onConfirmDialogClose = () => {
    setConfirmOpen(false);
    setSuccessOpen(false);
    confirmDialogState.onClose?.();
  };

  const onConfirmDialogCancel = () => {
    confirmDialogState.onCancel?.();
  };

  const onOKDialogConfirm = () => {
    confirmDialogState.onConfirm?.();
  };

  const success = useCallback((params: ConfirmDialogParams) => {
    const {
      buttonProps,
      content,
      title,
      showCancel = true,
      showCloseBtn = false,
      onCancel = noop,
      onClose = noop,
      onConfirm = noop,
    } = params;
    setConfirmDialogState((prevState) => ({
      ...prevState,
      buttonProps,
      content,
      title,
      showCancel,
      showCloseBtn,
      onCancel,
      onClose,
      onConfirm,
    }));
    setSuccessOpen(true);
  }, []);

  const toasterProviderValue = useMemo(
    () => ({
      confirm,
      success,
      closeConfirm,
      setConfirmLoading,
    }),
    [confirm, success, closeConfirm],
  );
  return (
    <ModalContext.Provider value={toasterProviderValue}>
      {confirmOpen && (
        <ConfirmDialog
          open={confirmOpen}
          buttonProps={confirmDialogState.buttonProps}
          title={confirmDialogState.title}
          content={confirmDialogState.content}
          onConfirm={onOKDialogConfirm}
          onCancel={onConfirmDialogCancel}
          onClose={onConfirmDialogClose}
          danger={confirmDialogState.danger}
          showCancel={confirmDialogState.showCancel}
        />
      )}
      {successOpen && (
        <SuccessDialog
          open={successOpen}
          buttonProps={confirmDialogState.buttonProps}
          title={confirmDialogState.title}
          content={confirmDialogState.content}
          onConfirm={onOKDialogConfirm}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('"useModalContext" must be used within "ModalProvider"');
  }

  return context;
};

export { ModalProvider, useModalContext };
