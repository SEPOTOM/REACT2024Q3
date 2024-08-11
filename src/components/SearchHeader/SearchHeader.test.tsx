import { waitFor } from '@testing-library/react';

import { renderWithUser } from '@tests/utils';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { SearchHeader } from '@/components';

test('SearchHeader saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const { user, getByRole } = renderWithUser(<SearchHeader />);

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('SearchHeader retrieves the search query from the local storage upon mounting', async () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');

  const { getByRole } = renderWithUser(<SearchHeader />);

  await waitFor(() => {
    expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
  });
});

test('SearchHeader has a combobox to change the app theme', async () => {
  const { findByRole } = renderWithUser(<SearchHeader />);

  expect(await findByRole('combobox', { name: /theme/i })).toBeInTheDocument();
});
