import { create } from 'zustand';

import { MAX_TOASTS } from '@/constants/config';
import type { ToasterStore, ToastMessage } from '@/types/toaster';

const useToasterStore = create<ToasterStore>((set, get) => ({
  messages: [],
  addMessage: (message: ToastMessage) => {
    set({ messages: [message, ...get().messages].slice(0, MAX_TOASTS) });
  },
  removeMessage: (id: string) => {
    set({ messages: get().messages.filter((message) => message.id !== id) });
  },
  clearMessages: () => {
    set({ messages: [] });
  },
}));

export default useToasterStore;
