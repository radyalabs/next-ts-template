import type { SyntheticEvent } from 'react';

export interface ToasterProps {
  autoHideDuration: number | null;
  error: boolean,
  message: string;
  onClose: (event: SyntheticEvent | Event, reason: string) => void;
  open: boolean;
  toasterKey: string;
}
