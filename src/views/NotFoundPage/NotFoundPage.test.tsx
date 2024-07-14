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

test('NotFoundPage is displayed for unknown routes', () => {
  window.history.pushState(null, '', '/unknown/route');
  const router = createBrowserRouter(routes);

  const { getByRole } = renderWithUser(<RouterProvider router={router} />);

  expect(
    getByRole('heading', { name: /page was not found/i }),
  ).toBeInTheDocument();
});
