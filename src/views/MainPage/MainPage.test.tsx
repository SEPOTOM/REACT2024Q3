import { renderWithUser } from '@tests/utils';

import { getSearchQuery } from '@utils/localStorage';

import { MainPage } from '@/views';

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const { user, getByRole } = renderWithUser(<MainPage />);

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});
