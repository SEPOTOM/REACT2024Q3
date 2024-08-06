import { renderWithUser } from '@tests/utils';

import { NotFoundPage } from '@/views';

test('NotFoundPage displays the relevant content', () => {
  window.history.pushState(null, '', '/unknown/route');

  const { getByRole } = renderWithUser(<NotFoundPage />);

  expect(
    getByRole('heading', { name: /page was not found/i }),
  ).toBeInTheDocument();
  expect(getByRole('link', { name: /to the main page/i })).toBeInTheDocument();
});
