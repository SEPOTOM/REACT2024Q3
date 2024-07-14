import { renderWithUser } from '@tests/utils';

import { Product } from '@services/types';

import { ProductsList } from '@/components';

test('ProductsList renders the specified number of cards', () => {
  const fakeProducts: Product[] = [
    {
      title: 'Product 1',
      description: 'Description 1',
      id: 1,
    },
    {
      title: 'Product 2',
      description: 'Description 2',
      id: 2,
    },
    {
      title: 'Product 3',
      description: 'Description 3',
      id: 3,
    },
  ];

  const { getAllByRole } = renderWithUser(
    <ProductsList products={fakeProducts} />,
  );

  expect(getAllByRole('listitem').length).toBe(3);
});
