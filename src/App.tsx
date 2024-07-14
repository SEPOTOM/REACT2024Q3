import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { MainPage, NotFoundPage, ProductPage } from '@/views';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/search/1" replace />,
  },
  {
    path: '/search/:searchPage',
    element: <MainPage />,
    children: [
      {
        path: 'details',
        element: <ProductPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
