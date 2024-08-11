import { renderWithUser } from '@tests/utils';

import NotFound from '@app/not-found';

test('Not found route displays the relevant content', () => {
  const { getByRole } = renderWithUser(<NotFound />);

  expect(
    getByRole('heading', { name: /page was not found/i }),
  ).toBeInTheDocument();
  expect(getByRole('link', { name: /to the main page/i })).toBeInTheDocument();
});
