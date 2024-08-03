import { Mock } from 'vitest';
import { waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

import { renderWithUser } from '@tests/utils';

import * as api from '@store/api/apiSlice';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { MainPage } from '@/views';

beforeAll(() => {
  (useRouter as Mock).mockReturnValue({
    pathname: '/search/2',
    query: { pageNumber: '2' },
    asPath: '/search/2',
    route: '/search/[pageNumber]',
    push: vi.fn(),
  });
});

afterAll(() => {
  vi.resetAllMocks();
});

test('MainPage saves the entered search query to the local storage when the Search button is clicked', async () => {
  localStorage.clear();
  const { user, getByRole } = renderWithUser(<MainPage />);

  await user.type(getByRole('searchbox'), 'Test query');
  await user.click(getByRole('button', { name: /search/i }));

  expect(getSearchQuery()).toBe('Test query');
});

test('MainPage retrieves the search query from the local storage upon mounting', async () => {
  localStorage.clear();
  saveSearchQuery('Saved search query');

  const { getByRole } = renderWithUser(<MainPage />);

  await waitFor(() => {
    expect(getByRole('searchbox')).toHaveDisplayValue('Saved search query');
  });
});

test('Main page has a combobox to change the app theme', async () => {
  const { findByRole } = renderWithUser(<MainPage />);

  expect(await findByRole('combobox', { name: /theme/i })).toBeInTheDocument();
});

test("MainPage triggers an API call via RTK Query's useGetProductsQuery hook", async () => {
  const useGetProductsQuerySpy = vi.spyOn(api, 'useGetProductsQuery');

  renderWithUser(<MainPage />);

  expect(useGetProductsQuerySpy).toBeCalled();
});
