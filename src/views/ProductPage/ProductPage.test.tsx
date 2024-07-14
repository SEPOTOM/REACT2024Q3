import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { renderWithUser } from '@tests/utils';

import { ProductPage } from '@/views';

import { routes } from '@/routes';

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

test('Ensure that clicking the close button hides ProductPage', async () => {
  window.history.pushState(null, '', '/search/1/details?product=1');
  const router = createBrowserRouter(routes);
  const { user, findByRole, queryByRole } = renderWithUser(
    <RouterProvider router={router} />,
  );

  await user.click(await findByRole('link', { name: /close/i }));

  expect(
    queryByRole('heading', { name: /Detailed Product 1/i }),
  ).not.toBeInTheDocument();
});
