import { renderWithUser } from '@tests/utils';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { MainPage } from '@/views';

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const { user, getByRole } = renderWithUser(<MainPage />);

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('MainPage retrieves the search query from the local storage upon mounting', () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');

  const { getByRole } = renderWithUser(<MainPage />);

  expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
});
