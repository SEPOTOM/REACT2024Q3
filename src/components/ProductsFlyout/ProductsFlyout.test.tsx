import { act } from '@testing-library/react';

import { renderWithUser } from '@tests/utils';

import { productChecked } from '@store/checkedProducts/checkedProductsSlice';

import { ProductsFlyout } from '@/components';

import { DetailedProduct } from '@services/types';

beforeAll(() => {
  vi.stubGlobal('URL', {
    createObjectURL: vi.fn(() => 'blob:http://example.com/fake-url'),
  });
});

afterAll(() => {
  vi.unstubAllGlobals();
});

test('ProductsFlyout displays nothing if there is no checked products in store', () => {
  const { queryByRole } = renderWithUser(<ProductsFlyout />);

  expect(queryByRole('status')).not.toBeInTheDocument();
});

test('ProductsFlyout displays amount of checked products', () => {
  const { getByRole, store } = renderWithUser(<ProductsFlyout />);
  const fakeProduct: DetailedProduct = {
    title: 'Fake Product',
    description: 'Fake Description',
    id: 1,
    category: 'Fake Category',
    price: 99.99,
    images: ['Fake url'],
  };
  act(() => {
    store.dispatch(productChecked(fakeProduct));
  });

  expect(getByRole('paragraph')).toHaveTextContent(/1 product/i);
});
