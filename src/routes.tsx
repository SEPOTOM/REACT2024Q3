import { Navigate, RouteObject } from 'react-router-dom';

import { MainPage, NotFoundPage, ProductPage } from '@/views';

export const routes: RouteObject[] = [
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
];
