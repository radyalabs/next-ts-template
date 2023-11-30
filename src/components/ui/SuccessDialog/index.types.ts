export interface SuccessDialogProps {
  buttonProps?: Partial<ConfirmButtons>
  title?: string;
  content?: string;
  open: boolean;
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
