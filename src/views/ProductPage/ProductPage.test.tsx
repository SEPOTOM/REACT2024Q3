import { renderWithUser } from '@tests/utils';

import { createFakeDetailedProduct } from '@tests/mocks/products';

import { ProductPage } from '@/views';

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
