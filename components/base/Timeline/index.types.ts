import type { ReactNode } from 'react';

export interface TimelineProps {
  className?: string;
  items?: TimelineItem[],
}

export interface TimelineItem {
  content: ReactNode;
  icon?: ReactNode;
  color?: 'inherit' | 'grey' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  variant?: 'filled' | 'outlined';
}
