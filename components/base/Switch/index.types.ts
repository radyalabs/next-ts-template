import type { ChangeEventHandler } from 'react';

export interface SwitchProps {
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  };
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  direction?: 'horizontal' | 'vertical';
  error?: boolean;
  id?: string;
  label?: string;
  labelLayout?: 'horizontal' | 'vertical';
  message?: string;
  name?: string;
  value?: string | number;
  required?: boolean;
  block?: boolean;
}
