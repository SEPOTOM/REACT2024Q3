import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

import { renderWithUser } from '@tests/utils';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

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

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const router = createBrowserRouter(routes);
  const { user, getByRole } = renderWithUser(
    <RouterProvider router={router} />,
  );

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('MainPage retrieves the search query from the local storage upon mounting', async () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');
  const router = createBrowserRouter(routes);

  const { getByRole } = renderWithUser(<RouterProvider router={router} />);

  await waitFor(() => {
    expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
  });
});

test('Validate that clicking on a card opens a detailed product page', async () => {
  const router = createBrowserRouter(routes);
  const { user, findByRole } = renderWithUser(
    <RouterProvider router={router} />,
  );

  await user.click(await findByRole('heading', { name: /Product 1/i }));

  expect(
    await findByRole('heading', { name: /Detailed Product 1/i }),
  ).toBeInTheDocument();
});
