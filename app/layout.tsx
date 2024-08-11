import '@/index.css';

import { ReactNode } from 'react';

import StoreProvider from '@store/StoreProvider';

import { ThemeProvider } from '@/contexts';

import { ErrorBoundary } from '@/components';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
