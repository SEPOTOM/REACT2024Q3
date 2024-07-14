import { BrowserRouter } from 'react-router-dom';

import { renderRouterWithUser, renderWithUser } from '@tests/utils';

import { ProductPage } from '@/views';

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
  const { user, findByRole, queryByRole } = renderRouterWithUser();

  await user.click(await findByRole('link', { name: /close/i }));

  expect(
    queryByRole('heading', { name: /Detailed Product 1/i }),
  ).not.toBeInTheDocument();
});
