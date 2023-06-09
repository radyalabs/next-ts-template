import type { ReactNode } from 'react';

export interface ModalProps {
  buttonCenter?: boolean;
  buttonConfirm?: 'default' | 'primary' | 'danger';
  captionButtonConfirm?: string;
  children: ReactNode;
  disabledButtonConfirm?: boolean;
  isConfirmSubmit?: boolean;
  isLoading?: boolean;
  open: boolean;
  title?: string;
  withButtonClose?: boolean;
  withIconClose?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
  size?: 'auto' | 'small' | 'medium' | 'large';
}
