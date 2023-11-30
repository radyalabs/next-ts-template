import type { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  /**
   * Content of button, can be Text or Icon
   */
  children: ReactNode;
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * Button colors
   */
  color?: 'default' | 'primary' | 'secondary' | 'danger' | 'success';
  /**
   /**
   * Button Variants
   */
  variant?: ButtonVariant;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Optional button rounded
   */
  rounded?: boolean;
  /**
   * Optional button disabled
   */
  disabled?: boolean;
  /**
   * Optional button loading state
   */
  loading?: boolean;
  /**
   * Optional click handler
   */
  onClick?: MouseEventHandler;
  type?: 'submit' | 'button';
  endIcon?: ReactNode;
  startIcon?: ReactNode;
}

export type ButtonVariant = 'default' | 'outline' | 'dashed' | 'text';

export default ButtonProps;
