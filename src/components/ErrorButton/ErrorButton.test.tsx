import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { routes } from '@/routes';

test('Click on ErrorButton should show the error page', async () => {
  const router = createBrowserRouter(routes);
  const { user, findByRole, getByRole } = renderWithUser(
    <RouterProvider router={router} />,
  );

  await user.click(await findByRole('button', { name: /throw/i }));

  expect(
    getByRole('heading', { name: /unexpected error/i }),
  ).toBeInTheDocument();
});
