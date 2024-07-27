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

test("ProductsFlyout's unselect button removes all checked products from the store", async () => {
  const { user, store, getByRole } = renderWithUser(<ProductsFlyout />, {
    preloadedState: {
      checkedProducts: {
        ids: [1, 2],
        entities: {
          1: createFakeDetailedProduct(1),
          2: createFakeDetailedProduct(2),
        },
      },
    },
  });

  await user.click(getByRole('button', { name: /unselect/i }));

  const checkedProductsState = store.getState().checkedProducts;
  expect(checkedProductsState.ids.length).toBe(0);
  expect(checkedProductsState.entities[1]).toBe(undefined);
  expect(checkedProductsState.entities[2]).toBe(undefined);
});

test('ProductsFlyout displays download link', () => {
  const { getByRole } = renderWithUser(<ProductsFlyout />, {
    preloadedState: {
      checkedProducts: {
        ids: [1],
        entities: {
          1: createFakeDetailedProduct(1),
        },
      },
    },
  });

  expect(getByRole('link', { name: /download/i })).toBeInTheDocument();
});
