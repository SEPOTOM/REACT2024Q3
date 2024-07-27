import { act } from '@testing-library/react';

import { renderWithUser } from '@tests/utils';
import { createFakeDetailedProduct } from '@tests/mocks/products';

import { productChecked } from '@store/checkedProducts/checkedProductsSlice';

import { ProductsFlyout } from '@/components';

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
  const fakeDetailedProduct = createFakeDetailedProduct(1);
  act(() => {
    store.dispatch(productChecked(fakeDetailedProduct));
  });

  expect(getByRole('paragraph')).toHaveTextContent(/1 product/i);
});
