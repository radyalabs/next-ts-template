import React, {
  createContext, useCallback, useContext, useMemo, useState,
} from 'react';

import Toaster from '@/components/base/Toaster';

import type { ToasterContextTypes, ToasterParams, ToasterProviderProps } from './index.types';

const ToasterContext = createContext<ToasterContextTypes | undefined>(undefined);

const ToasterProvider = ({ children }: ToasterProviderProps) => {
  const [state, setState] = useState({
    open: false,
    error: false,
    message: '',
    toasterKey: '',
  });

  const show = useCallback((params: ToasterParams) => {
    const {
      message,
      error = false,
      toasterKey = 'main',
    } = params;
    setState((prevState) => ({
      ...prevState,
      error,
      toasterKey,
      message,
      open: true,
    }));
  }, []);

  const onClose = () => {
    setState({ ...state, open: false });
  };

  const toasterProviderValue = useMemo(() => ({
    show,
  }), [show]);
  return (
    <ToasterContext.Provider value={toasterProviderValue}>
      <Toaster
        autoHideDuration={2000}
        error={state.error}
        toasterKey={state.toasterKey}
        message={state.message}
        onClose={onClose}
        open={state.open}
      />
      {children}
    </ToasterContext.Provider>
  );
};

const useToasterContext = () => {
  const context = useContext(ToasterContext);

  if (!context) {
    throw new Error('"useToasterContext" must be used within "ToasterProvider"');
  }

  return context;
};

export { ToasterProvider, useToasterContext };
