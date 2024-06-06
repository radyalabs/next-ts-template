import type { ReactNode } from 'react';

export interface PopoverProps {
  anchorEl: Element | null;
  className?: string;
  closable?: boolean;
  open: boolean;
  onClose?: () => void;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  children: ReactNode;
  disableRestoreFocus?: boolean;
}

export interface PopoverOrigin {
  vertical: 'bottom' | 'top' | 'center' | number,
  horizontal: 'left' | 'center' | 'right' | number,
}
