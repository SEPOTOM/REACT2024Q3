import { waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { renderRouterWithUser, renderWithUser } from '@tests/utils';
import { createFakeProduct } from '@tests/mocks/products';

import * as api from '@store/api/apiSlice';

import { ProductCard } from '@/components';

test('ProductCard renders the relevant card data', () => {
  const fakeProduct = createFakeProduct(1);

  const { getByRole } = renderWithUser(
    <BrowserRouter>
      <ProductCard product={fakeProduct} />
    </BrowserRouter>,
  );

  expect(getByRole('heading')).toHaveTextContent(/Fake Product/i);
  expect(getByRole('paragraph')).toHaveTextContent(/Fake Description/i);
});

test('Validate that clicking on a card opens a detailed product page', async () => {
  const { user, findByRole } = renderRouterWithUser();

  await user.click(await findByRole('heading', { name: /Product 1/i }));

  expect(
    await findByRole('heading', { name: /Detailed Product 1/i }),
  ).toBeInTheDocument();
});

test('Opening a detailed product page triggers an additional API call to fetch detailed information', async () => {
  window.history.pushState(null, '', '/');
  const fetchSpy = vi.spyOn(window, 'fetch');
  const { user, findByRole } = renderRouterWithUser();

  await user.click(await findByRole('heading', { name: /Product 1/i }));

  expect(fetchSpy).toBeCalledTimes(2);
});

test('ProductCard displays a checkbox', () => {
  const fakeProduct = createFakeProduct(1);
  const { getByRole } = renderWithUser(
    <MemoryRouter>
      <ProductCard product={fakeProduct} />
    </MemoryRouter>,
  );

  expect(getByRole('checkbox', { name: /select/i })).toBeInTheDocument();
});

test("Checking ProductCard's checkbox adds the detailed product to the store", async () => {
  const productId = 1;
  const fakeProduct = createFakeProduct(productId);
  const { user, getByRole, store } = renderWithUser(
    <MemoryRouter>
      <ProductCard product={fakeProduct} />
    </MemoryRouter>,
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
    <MemoryRouter>
      <ProductCard product={fakeProduct} />
    </MemoryRouter>,
  );

  await user.click(getByRole('checkbox', { name: /select/i }));

  expect(useReceiveProductMutationSpy).toBeCalled();
  expect(fetchSpy).toBeCalledTimes(1);
});
