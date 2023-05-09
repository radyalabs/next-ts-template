import type {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

interface TextFieldProps {
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
  value?: string;
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
  label?: string;
  onChange?: ChangeEventHandler;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onClick?: MouseEventHandler;
  onKeyUp?: KeyboardEventHandler;
  required?: boolean;
  type?: InputHTMLAttributes<unknown>['type'];
  name?: string;
  message?: string;
  size?: 'small' | 'medium';
}

export default TextFieldProps;
