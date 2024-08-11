import { renderWithUser } from '@tests/utils';

import SearchLoading from '@app/search/[pageNumber]/loading';

test('Search route loading displays loading indicator', () => {
  const { getByRole } = renderWithUser(<SearchLoading />);

  expect(getByRole('status')).toBeInTheDocument();
});
