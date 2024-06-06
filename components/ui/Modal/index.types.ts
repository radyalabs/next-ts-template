import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  closable?: boolean;
  title?: string;
  open: boolean;
  onClose?: () => void;
  width?: string | number;
  fullWidth?: boolean;
}

export interface ModalChildrenProps {
  children: ReactNode;
  className?: string;
}
