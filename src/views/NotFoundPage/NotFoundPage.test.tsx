import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { routes } from '@/routes';

test('NotFoundPage is displayed for unknown routes', () => {
  window.history.pushState(null, '', '/unknown/route');
  const router = createBrowserRouter(routes);

  const { getByRole } = renderWithUser(<RouterProvider router={router} />);

  expect(
    getByRole('heading', { name: /page was not found/i }),
  ).toBeInTheDocument();
});
