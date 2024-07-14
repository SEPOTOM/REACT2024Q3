import { renderWithUser } from '@tests/utils';

import { ProductPage } from '@/views';
import { BrowserRouter } from 'react-router-dom';

vi.mock('@services/api', () => {
  return {
    getProductsBySearchQuery: vi.fn().mockImplementation(async () => {
      return [
        { title: 'Product 1', description: 'Description 1', id: 1 },
        { title: 'Product 2', description: 'Description 2', id: 2 },
      ];
    }),
    getProductById: vi.fn().mockImplementation(async (productId: number) => {
      return {
        title: `Detailed Product ${productId}`,
        description: `Detailed Description ${productId}`,
        category: `Detailed Category ${productId}`,
        price: 9.99,
        images: [`Detailed Image ${productId}`],
        id: productId,
      };
    }),
  };
});

test('ProductPage displays a loading indicator while fetching data', async () => {
  window.history.pushState(null, '', '/search/1/details?product=1');

  const { findByRole } = renderWithUser(
    <BrowserRouter>
      <ProductPage />
    </BrowserRouter>,
  );

  expect(await findByRole('status')).toHaveTextContent(/loading/i);
});

test('ProductPage correctly displays the detailed product data', async () => {
  window.history.pushState(null, '', '/search/1/details?product=1');

  const { findByAltText, getByRole, getByText } = renderWithUser(
    <BrowserRouter>
      <ProductPage />
    </BrowserRouter>,
  );

  expect(await findByAltText(/Detailed Product 1/i)).toBeInTheDocument();
  expect(
    getByRole('heading', { name: /Detailed Product 1/i }),
  ).toBeInTheDocument();
  expect(getByText(/Detailed Description 1/i)).toBeInTheDocument();
  expect(getByText(/Detailed Category 1/i)).toBeInTheDocument();
  expect(getByText(/9.99/i)).toBeInTheDocument();
});
