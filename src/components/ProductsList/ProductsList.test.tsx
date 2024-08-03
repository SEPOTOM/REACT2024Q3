import { Mock } from 'vitest';
import { renderWithUser } from '@tests/utils';
import { useRouter } from 'next/router';

import { createFakeProducts } from '@tests/mocks/products';

import { ProductsList } from '@/components';

beforeAll(() => {
  (useRouter as Mock).mockReturnValue({
    pathname: '/search/2',
    query: { pageNumber: '2' },
    asPath: '/search/2',
    route: '/search/[pageNumber]',
  });
});

afterAll(() => {
  vi.resetAllMocks();
});

test('ProductsList renders the specified number of cards', () => {
  (useRouter as Mock).mockReturnValueOnce({
    pathname: '/search/2',
    query: { pageNumber: '2' },
    asPath: '/search/2',
    route: '/search/[pageNumber]',
  });
  const fakeProducts = createFakeProducts(3);

  const { getAllByRole } = renderWithUser(
    <ProductsList products={fakeProducts} />,
  );

  expect(getAllByRole('listitem').length).toBe(3);
});

test('ProductsList displays a message when no products are found', () => {
  const fakeProducts = createFakeProducts(0);

  const { getByRole } = renderWithUser(
    <ProductsList products={fakeProducts} />,
  );

  expect(getByRole('status')).toHaveTextContent(/no products were found/i);
});
