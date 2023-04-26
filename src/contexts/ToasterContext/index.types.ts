import type { ReactNode } from 'react';

export interface ToasterParams { message: string, error?: boolean, toasterKey?: string }
export interface ToasterContextTypes {
  show: (params: ToasterParams) => void;
}

export interface ToasterProviderProps {
  children: ReactNode;
}
