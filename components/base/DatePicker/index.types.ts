import type {
  InputHTMLAttributes,
  ReactNode,
} from 'react';

export interface DatePickerProps {
  /**
   * can be Text or Icon
   */
  prependObject?: ReactNode;
  /**
   * can be Text or Icon
   */
  appendObject?: ReactNode;
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * Custom Classname
   */
  innerClassName?: string;
  /**
   * placeholder
   */
  placeholder?: string;
  /**
   * id of input
   */
  id?: string;
  /**
   * value of input
   */
  value?: Date | null;
  /**
   * Optional input success
   */
  success?: boolean;
  /**
   * Optional input error
   */
  error?: boolean;
  /**
   * Optional input disabled
   */
  disabled?: boolean;
  /**
   * Optional input rounded
   */
  rounded?: boolean;
  /**
   * Optional change handler
   */
  block?: boolean;
  disablePast?: boolean;
  label?: string;
  labelLayout?: 'vertical' | 'horizontal';
  onChange?: (value: Date | null) => void;
  onClose?: () => void;
  onOpen?: () => void;
  required?: boolean;
  type?: InputHTMLAttributes<unknown>['type'];
  name?: string;
  message?: string;
  size?: 'small' | 'medium';
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  }
  maxDate?: Date | undefined;
  minDate?: Date | undefined;
  views?: DatePickerView[];
}

export type DatePickerView = 'year' | 'month' | 'day';
