import type { ToastMessageContext } from '@/types/toaster';

export interface ToasterProps {
  context?: ToastMessageContext;
  message: string;
}
