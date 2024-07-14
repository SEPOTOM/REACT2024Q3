import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { routes } from '@/routes';

vi.mock('@services/api', () => {
  return {
    getProductsBySearchQuery: vi.fn().mockImplementation(async () => {
      return [
        { title: 'Product 1', description: 'Description 1', id: 1 },
        { title: 'Product 2', description: 'Description 2', id: 2 },
      ];
    }),
    getProductById: vi.fn().mockImplementation(async (productId: number) => {
      return {
        title: `Detailed Product ${productId}`,
        description: `Detailed Description ${productId}`,
        category: `Detailed Category ${productId}`,
        price: 9.99,
        images: [`Detailed Image ${productId}`],
        id: productId,
      };
    }),
  };
});

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
