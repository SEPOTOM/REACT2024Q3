import { Mock } from 'vitest';
import { renderWithUser } from '@tests/utils';
import { useRouter } from 'next/router';

import { createFakeRouter } from '@tests/mocks/router';

import * as api from '@store/api/apiSlice';

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

test('ProductPage displays a loading indicator while fetching data', async () => {
  window.history.pushState(null, '', '/search/1/details?product=1');

  const { findByRole } = renderWithUser(<ProductPage />);

  expect(await findByRole('status')).toHaveTextContent(/loading/i);
});

test('ProductPage correctly displays the detailed product data', async () => {
  window.history.pushState(null, '', '/search/1/details?product=1');

  const { findByAltText, getByRole, getByText } = renderWithUser(
    <ProductPage />,
  );

  expect(await findByAltText(/Detailed Product 1/i)).toBeInTheDocument();
  expect(
    getByRole('heading', { name: /Detailed Product 1/i }),
  ).toBeInTheDocument();
  expect(getByText(/Detailed Description 1/i)).toBeInTheDocument();
  expect(getByText(/Detailed Category 1/i)).toBeInTheDocument();
  expect(getByText(/9.99/i)).toBeInTheDocument();
});

test("ProductPage triggers an API call via RTK Query's useGetProductByIdQuery hook", async () => {
  const useGetProductByIdQuerySpy = vi.spyOn(api, 'useGetProductByIdQuery');

  renderWithUser(<ProductPage />);

  expect(useGetProductByIdQuerySpy).toBeCalled();
});
