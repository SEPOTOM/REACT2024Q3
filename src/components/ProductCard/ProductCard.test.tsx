import { BrowserRouter, MemoryRouter } from 'react-router-dom';

import { renderRouterWithUser, renderWithUser } from '@tests/utils';

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
  const fakeProduct: Product = {
    title: 'Fake Product',
    description: 'Fake Description',
    id: 1,
  };
  const { getByRole } = renderWithUser(
    <MemoryRouter>
      <ProductCard product={fakeProduct} />
    </MemoryRouter>,
  );

  expect(getByRole('checkbox', { name: /select/i })).toBeInTheDocument();
});
