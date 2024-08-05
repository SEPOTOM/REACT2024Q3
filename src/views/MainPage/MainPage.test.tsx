import { Mock } from 'vitest';
import { waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

import { renderWithUser } from '@tests/utils';
import { createFakeProductsResponse } from '@tests/mocks/products';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { MainPage } from '@/views';

beforeAll(() => {
  (useRouter as Mock).mockReturnValue({
    pathname: '/search/2',
    query: { pageNumber: '2' },
    asPath: '/search/2',
    route: '/search/[pageNumber]',
    push: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
    },
  });
});

afterAll(() => {
  vi.resetAllMocks();
});

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const fakeProductsResponse = createFakeProductsResponse(5);
  const { user, getByRole } = renderWithUser(
    <MainPage productsResponse={fakeProductsResponse} totalPages={1} />,
  );

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('MainPage retrieves the search query from the local storage upon mounting', async () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');
  const fakeProductsResponse = createFakeProductsResponse(15);

  const { getByRole } = renderWithUser(
    <MainPage productsResponse={fakeProductsResponse} totalPages={2} />,
  );

  await waitFor(() => {
    expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
  });
});

test('Main page has a combobox to change the app theme', async () => {
  const fakeProductsResponse = createFakeProductsResponse(1);

  const { findByRole } = renderWithUser(
    <MainPage productsResponse={fakeProductsResponse} totalPages={1} />,
  );

  expect(await findByRole('combobox', { name: /theme/i })).toBeInTheDocument();
});
