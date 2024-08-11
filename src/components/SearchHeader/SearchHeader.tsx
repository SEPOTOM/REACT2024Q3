'use client';

import { useTheme } from '@/contexts';
import { useSearchQuery } from '@/hooks';

import { ErrorButton, SearchForm, ThemesComboBox } from '@/components';

import styles from '@components/SearchHeader/SearchHeader.module.css';

const SearchHeader = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <header
      className={`${styles.searchHeader} ${styles[`searchHeader_theme_${theme}`]}`}
    >
      <div className={`container ${styles.searchHeaderInner}`}>
        <ErrorButton />
        <SearchForm
          initialSearchQuery={searchQuery}
          onFormSubmit={handleSearchFormSubmit}
        />
        <ThemesComboBox />
      </div>
    </header>
  );
};

export default SearchHeader;
