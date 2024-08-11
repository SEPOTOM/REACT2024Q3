import { Mock } from 'vitest';
import { useParams } from 'next/navigation';

import { renderWithUser } from '@tests/utils';

import { Pagination } from '@/components';

test('Pagination displays the page number from URL', () => {
  (useParams as Mock).mockReturnValueOnce({ pageNumber: '2' });

  const { getByRole } = renderWithUser(<Pagination totalPages={5} />);

  expect(getByRole('status')).toHaveTextContent(/2/i);
});
