export interface ConfirmDialogProps {
  buttonProps?: Partial<ConfirmButtons>
  title?: string;
  content?: string;
  danger?: boolean;
  open: boolean;
  showCancel?: boolean;
  showCloseBtn?: boolean;
  onClose?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
}

interface ConfirmButtons {
  confirm: Partial<ConfirmButtonProps>
  cancel: Partial<ConfirmButtonProps>
}

interface ConfirmButtonProps {
  label: string;
  loading: boolean;
  disabled: boolean;
}
