import type { ReactNode } from 'react';

export interface DroppableProps {
  children: ReactNode;
  className: string;
  onDrop: (file: File[]) => void;
}
