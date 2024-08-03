import '@/index.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { wrapper } from '@/store/store';

import { ThemeProvider } from '@/contexts';

import { ErrorBoundary } from '@/components';

const MyApp = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;
