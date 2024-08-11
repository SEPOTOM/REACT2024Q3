import { renderWithUser } from '@tests/utils';

import { SearchPageColumns } from '@/views';

test('SearchPageColumns displays passed data correctly', () => {
  const { getByRole } = renderWithUser(
    <SearchPageColumns
      main={<p>Test paragraph</p>}
      aside={<aside>Test aside</aside>}
    />,
  );

  expect(getByRole('paragraph')).toHaveTextContent('Test paragraph');
  expect(getByRole('complementary')).toHaveTextContent('Test aside');
});
