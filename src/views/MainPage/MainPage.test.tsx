import { BrowserRouter } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

import { renderRouterWithUser, renderWithUser } from '@tests/utils';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { MainPage } from '@/views';

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const { user, getByRole } = renderRouterWithUser();

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('MainPage retrieves the search query from the local storage upon mounting', async () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');

  const { getByRole } = renderRouterWithUser();

  await waitFor(() => {
    expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
  });
});

test('Main page has a combobox to change the app theme', async () => {
  const { findByRole } = renderWithUser(
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>,
  );

  expect(await findByRole('combobox', { name: /theme/i })).toBeInTheDocument();
});
