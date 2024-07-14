import { BrowserRouter } from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { Product } from '@services/types';

import { ProductCard } from '@/components';

test('ProductCard renders the relevant card data', () => {
  const fakeProduct: Product = {
    title: 'Fake Product',
    description: 'Fake Description',
    id: 1,
  };

  const { getByRole } = renderWithUser(
    <BrowserRouter>
      <ProductCard product={fakeProduct} />
    </BrowserRouter>,
  );

  expect(getByRole('heading')).toHaveTextContent('Fake Product');
  expect(getByRole('paragraph')).toHaveTextContent('Fake Description');
});
