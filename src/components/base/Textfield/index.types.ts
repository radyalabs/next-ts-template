import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

export interface TextFieldProps {
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
  value?: string | number;
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
  autoComplete?: string;
  autoFocus?: boolean;
  block?: boolean;
  inlineLabel?: string;
  label?: string;
  labelLayout?: 'vertical' | 'horizontal';
  maxLength?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onClick?: MouseEventHandler;
  onKeyUp?: KeyboardEventHandler;
  onKeyDown?: KeyboardEventHandler;
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
}
