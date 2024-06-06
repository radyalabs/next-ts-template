import type { ChangeEventHandler } from 'react';

import type { RadioOption } from '@/types/inputs';

export interface RadioProps {
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  };
  className?: string;
  defaultValue?: string | number;
  direction?: 'horizontal' | 'vertical';
  error?: boolean;
  id?: string;
  label?: string;
  labelLayout?: 'horizontal' | 'vertical';
  message?: string;
  name?: string;
  onChange?: ChangeEventHandler;
  options: RadioOption[];
  required?: boolean;
  checkedValue?: string;
  value?: string;
}
