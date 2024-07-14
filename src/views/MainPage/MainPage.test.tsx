import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

import { renderWithUser } from '@tests/utils';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { routes } from '@/routes';

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
