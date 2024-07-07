enum LSKeys {
  SEARCH_QUERY = 'SEPOTOM-search-query',
}

export const saveSearchQuery = (newSearchQuery: string) => {
  localStorage.setItem(LSKeys.SEARCH_QUERY, newSearchQuery);
};
