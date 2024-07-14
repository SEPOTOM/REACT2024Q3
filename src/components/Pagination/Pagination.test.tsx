import { BrowserRouter } from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { Pagination } from '@/components';

test('Pagination updates URL query parameter when page changes', async () => {
  window.history.pushState(null, '', '/search/1');
  const { user, getByRole } = renderWithUser(
    <BrowserRouter>
      <Pagination />
    </BrowserRouter>,
  );

  await user.click(getByRole('link', { name: /next page/i }));

  expect(window.location.pathname).toBe('/search/2');
});
