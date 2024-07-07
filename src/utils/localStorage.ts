enum LSKeys {
  SEARCH_QUERY = 'SEPOTOM-search-query',
}

export const saveSearchQuery = (newSearchQuery: string): void => {
  localStorage.setItem(LSKeys.SEARCH_QUERY, newSearchQuery);
};

export const getSearchQuery = (): string | null => {
  return localStorage.getItem(LSKeys.SEARCH_QUERY) || null;
};
