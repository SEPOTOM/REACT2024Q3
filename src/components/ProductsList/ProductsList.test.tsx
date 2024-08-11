import { renderWithUser } from '@tests/utils';

import { createFakeProducts } from '@tests/mocks/products';

import { ProductsList } from '@/components';

test('ProductsList renders the specified number of cards', () => {
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
