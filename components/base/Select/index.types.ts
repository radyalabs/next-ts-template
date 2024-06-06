import type { SelectChangeEvent } from '@mui/material/Select';
import type {
  FocusEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  MouseEventHandler,
  ReactNode,
} from 'react';

import type { SelectItem } from '@/types/inputs';

export interface SelectProps {
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
   * default value of uncontrolled input
   */
  defaultValue?: string | string[];
  /**
   * value of input
   */
  value?: string | string[] | number;
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
  options?: SelectItem[];
  block?: boolean;
  clearable?: boolean;
  label?: string;
  labelLayout?: 'vertical' | 'horizontal';
  onChange?: (event: ModifiedSelectChangeEvent) => void;
  onBlur?: FocusEventHandler;
  onFocus?: FocusEventHandler;
  onClick?: MouseEventHandler;
  onChangeSearchValue?: (value: string) => void;
  onKeyUp?: KeyboardEventHandler;
  required?: boolean;
  type?: InputHTMLAttributes<unknown>['type'];
  name?: string;
  message?: string;
  multiple?: boolean;
  size?: 'small' | 'medium';
  classes?: {
    label?: string;
    container?: string;
    input?: string;
  }
  showSearch?: boolean;
  inputValue?: string;
  filteredOptions?: SelectItem[];
}

export type ModifiedSelectChangeEvent = SelectChangeEvent<string | string[] | number>;
