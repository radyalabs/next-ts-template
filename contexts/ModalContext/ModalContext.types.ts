import type { ReactNode } from 'react';

import type { ConfirmDialogProps } from '@/components/ui/ConfirmDialog/index.types';
import type { SuccessDialogProps } from '@/components/ui/SuccessDialog/index.types';

export type ConfirmDialogParams = Omit<ConfirmDialogProps, 'open'>;
export type SuccessDialogParams = Omit<SuccessDialogProps, 'open'>;

export interface ModalContextTypes {
  confirm: (params: ConfirmDialogParams) => void;
  success: (params: SuccessDialogParams) => void;
  closeConfirm: () => void;
  setConfirmLoading: (loadingState: boolean) => void;
}

export interface ModalProviderProps {
  children: ReactNode;
}
