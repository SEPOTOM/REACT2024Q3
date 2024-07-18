import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@/contexts';

import { routes } from '@/routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
