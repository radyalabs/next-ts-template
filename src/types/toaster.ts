export type ToastMessageContext = 'default' | 'info' | 'success' | 'warning' | 'error';

export interface ToastMessage {
  id: string;
  message: string;
  context: ToastMessageContext;
}

export interface ToasterStore {
  messages: ToastMessage[];
  addMessage: (message: ToastMessage) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
}
