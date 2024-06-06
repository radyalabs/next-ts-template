'use client';

import { usePathname, useRouter } from 'next/navigation';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AxiosError } from 'axios';
import { id } from 'date-fns/locale';
import type { ReactNode } from 'react';

import ToasterContainer from '@/components/ui/ToasterContainer';
import HTTP_CODE from '@/constants/httpCode';
import { AuthProvider } from '@/contexts/AuthContext';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { ModalProvider } from '@/contexts/ModalContext';
import { removeAuth } from '@/helpers';
import type { BaseError } from '@/types/responses';
import { createQueryParams } from '@/utils';

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => {
        const { response } = error as AxiosError<BaseError>;
        const { data } = response || {};
        const { code } = data || {};
        if (code === HTTP_CODE.unauthorized) {
          removeAuth();
          const query = { returnUrl: pathname };
          router.push(`/login?${createQueryParams(query)}`);
        }
      },
    }),
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <main className="min-h-full">
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={id}>
          <ToasterContainer />
          <ModalProvider>
            <LayoutProvider>
              <AuthProvider>{children}</AuthProvider>
            </LayoutProvider>
          </ModalProvider>
        </LocalizationProvider>
      </main>
    </QueryClientProvider>
  );
};

export default ContextProvider;
