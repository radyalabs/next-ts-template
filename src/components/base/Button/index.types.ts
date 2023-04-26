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
  color?: 'default' | 'primary' | 'danger';
  /**
   /**
   * Button Variants
   */
  variant?: 'default' | 'outline' | 'dashed' | 'text';
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
}

export default ButtonProps;
