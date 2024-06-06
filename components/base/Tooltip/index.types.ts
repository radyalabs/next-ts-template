import type { ReactElement, ReactNode, SyntheticEvent } from 'react';

export interface TooltipProps {
  children: ReactElement;
  className?: string;
  disableFocus?: boolean;
  disableHover?: boolean;
  onClose?: (event: SyntheticEvent | Event) => void;
  onOpen?: (event: SyntheticEvent) => void;
  open?: boolean;
  placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left'
  | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
  title: ReactNode;
}
