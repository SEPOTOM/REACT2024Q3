import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/contexts';

import { ErrorBoundary } from '@/components';

import { routes } from '@/routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
