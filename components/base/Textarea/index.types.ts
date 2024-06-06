import type {
  ChangeEventHandler,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';

interface TextareaProps {
  className?: string;
  /**
   * Custom Classname
   */
  innerClassName?: string;
  /**
   * Custom Classname for input area
   */
  placeholder?: string;
  /**
   * id of textarea
   */
  id?: string;
  /**
   * value of textarea
   */
  defautValue?: string;
  /**
   * default value of textarea
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
  maxLength?: number;
  /**
   * Optional change handler
   */
  block?: boolean;
  label?: string;
  labelLayout?: 'vertical' | 'horizontal';
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onClick?: MouseEventHandler;
  onKeyUp?: KeyboardEventHandler;
  required?: boolean;
  name?: string;
  message?: string;
  size?: 'small' | 'medium';
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  }
  minRows?: number;
  maxRows?: number;
}

export default TextareaProps;
