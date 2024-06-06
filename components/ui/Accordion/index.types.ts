import type { ReactNode } from 'react';

export interface AccordionsProps {
  children: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  label: string;
}
