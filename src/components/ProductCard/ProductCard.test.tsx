import type { Mock } from 'vitest';
import { waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

import { renderWithUser } from '@tests/utils';
import {
  createFakeDetailedProduct,
  createFakeProduct,
} from '@tests/mocks/products';

import * as api from '@store/api/apiSlice';

import { RootState } from '@store/store';

import { ProductCard } from '@/components';

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

test('ProductCard renders the relevant card data', () => {
  const fakeProduct = createFakeProduct(1);

  const { getByRole } = renderWithUser(<ProductCard product={fakeProduct} />);

  expect(getByRole('heading')).toHaveTextContent(/Fake Product/i);
  expect(getByRole('paragraph')).toHaveTextContent(/Fake Description/i);
});

test('ProductCard displays a checkbox', () => {
  const fakeProduct = createFakeProduct(1);
  const { getByRole } = renderWithUser(<ProductCard product={fakeProduct} />);

  expect(getByRole('checkbox', { name: /select/i })).toBeInTheDocument();
});

test("Checking ProductCard's checkbox adds the detailed product to the store", async () => {
  const productId = 1;
  const fakeProduct = createFakeProduct(productId);
  const { user, getByRole, store } = renderWithUser(
    <ProductCard product={fakeProduct} />,
  );

  await user.click(getByRole('checkbox', { name: /select/i }));

  await waitFor(() => {
    const { ids, entities } = store.getState().checkedProducts;
    expect(ids.includes(productId)).toBeTruthy();
    expect(entities[productId]).toBeTruthy();
  });
});

test("ProductCard triggers an API call via RTK Query's useReceiveProductMutation hook", async () => {
  const fetchSpy = vi.spyOn(window, 'fetch');
  const useReceiveProductMutationSpy = vi.spyOn(
    api,
    'useReceiveProductMutation',
  );
  const fakeProduct = createFakeProduct(1);
  const { user, getByRole } = renderWithUser(
    <ProductCard product={fakeProduct} />,
  );

  await user.click(getByRole('checkbox', { name: /select/i }));

  expect(useReceiveProductMutationSpy).toBeCalled();
  expect(fetchSpy).toBeCalledTimes(1);
});

test("Unchecking ProductCard's checkbox removes the detailed product from the store", async () => {
  const productId = 1;
  const fakeProduct = createFakeProduct(productId);
  const preloadedState: Partial<RootState> = {
    checkedProducts: {
      ids: [productId],
      entities: {
        [productId]: createFakeDetailedProduct(productId),
      },
    },
  };
  const { user, getByRole, store } = renderWithUser(
    <ProductCard product={fakeProduct} />,
    { preloadedState },
  );

  await user.click(getByRole('checkbox', { name: /select/i }));

  const { ids, entities } = store.getState().checkedProducts;
  expect(ids.includes(productId)).toBeFalsy();
  expect(entities[productId]).toBe(undefined);
});

test("ProductCard's checkbox is checked if the store has the corresponding detailed product", () => {
  const productId = 1;
  const fakeProduct = createFakeProduct(productId);
  const preloadedState: Partial<RootState> = {
    checkedProducts: {
      ids: [productId],
      entities: {
        [productId]: createFakeDetailedProduct(productId),
      },
    },
  };

  const { getByRole } = renderWithUser(<ProductCard product={fakeProduct} />, {
    preloadedState,
  });

  expect(getByRole('checkbox', { name: /select/i })).toBeChecked();
});
