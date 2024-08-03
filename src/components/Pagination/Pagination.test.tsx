import { Mock } from 'vitest';
import { useRouter } from 'next/router';

import { renderWithUser } from '@tests/utils';

import { Pagination } from '@/components';

test('Pagination displays the page number from URL', () => {
  (useRouter as Mock).mockReturnValueOnce({
    pathname: '/search/2',
    query: { pageNumber: '2' },
    asPath: '/search/2',
    route: '/search/[pageNumber]',
  });

  const { getByRole } = renderWithUser(<Pagination totalPages={5} />);

  expect(getByRole('status')).toHaveTextContent(/2/i);
});
