import { Themes } from '@/consts';

enum LSKeys {
  SEARCH_QUERY = 'SEPOTOM-search-query',
  THEME = 'SEPOTOM-theme',
}

export const saveSearchQuery = (newSearchQuery: string): void => {
  localStorage.setItem(LSKeys.SEARCH_QUERY, newSearchQuery);
};

export const getSearchQuery = (): string | null => {
  return localStorage.getItem(LSKeys.SEARCH_QUERY) || null;
};

export const saveTheme = (newTheme: string): void => {
  localStorage.setItem(LSKeys.THEME, newTheme);
};

export const getTheme = (): Nullable<string> => {
  return (
    Themes[localStorage.getItem(LSKeys.THEME)?.toUpperCase() || ''] || null
  );
};
