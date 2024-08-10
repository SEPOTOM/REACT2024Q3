'use client';

import { useSearchQuery } from '@/hooks';

import { ErrorButton, SearchForm, ThemesComboBox } from '@/components';

import styles from '@views/MainPage/MainPage.module.css';

const SearchHeader = () => {
  const [searchQuery, setSearchQuery] = useSearchQuery();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
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
