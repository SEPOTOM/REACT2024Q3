import { Mock } from 'vitest';
import { renderWithUser } from '@tests/utils';
import { useRouter } from 'next/router';

import { createFakeRouter } from '@tests/mocks/router';
import { createFakeDetailedProduct } from '@tests/mocks/products';

import { ProductPage } from '@/views';

beforeAll(() => {
  (useRouter as Mock).mockReturnValue(
    createFakeRouter({
      pathname: '/search/2',
      query: { pageNumber: '2' },
      asPath: '/search/2',
      route: '/search/[pageNumber]',
    }),
  );
});

afterAll(() => {
  vi.resetAllMocks();
});

test('ProductPage correctly displays the detailed product data', async () => {
  const fakeDetailedProduct = createFakeDetailedProduct(19);

  const { findByAltText, getByRole, getByText } = renderWithUser(
    <ProductPage detailedProduct={fakeDetailedProduct} />,
  );

  expect(await findByAltText(/Detailed Product 1/i)).toBeInTheDocument();
  expect(
    getByRole('heading', { name: /Detailed Product 1/i }),
  ).toBeInTheDocument();
  expect(getByText(/Detailed Description 1/i)).toBeInTheDocument();
  expect(getByText(/Detailed Category 1/i)).toBeInTheDocument();
  expect(getByText(/9.99/i)).toBeInTheDocument();
});
