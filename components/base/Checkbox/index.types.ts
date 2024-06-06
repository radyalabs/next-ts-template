import type {
  ChangeEventHandler, RefObject,
} from 'react';

interface CheckboxProps {
  className?: string;
  error?: boolean;
  id?: string;
  checked?: boolean;
  required?: boolean;
  message?: string;
  name?: string;
  label?: string;
  box?: boolean;
  ref?: RefObject<HTMLButtonElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  classes?: {
    checkBox?: string;
    label?: string;
  }
  value?: boolean;
}

export default CheckboxProps;
