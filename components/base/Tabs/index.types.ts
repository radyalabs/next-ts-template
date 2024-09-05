import type { ReactNode } from 'react';

export interface TabPanelProps {
  children: ReactNode;
  value: number;
  index: number;
}

export interface TabsProps {
  className?: string;
  children: ReactNode;
  value: number;
  labels: string[];
  counters: number[];
  onChange: (tabIndex: number) => void;
  hrefs?: string[];
}
