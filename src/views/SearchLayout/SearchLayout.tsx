'use client';

import { ReactNode } from 'react';

import { useTheme } from '@/contexts';
import { useSearchQuery } from '@/hooks';

import { ErrorButton, SearchForm, ThemesComboBox } from '@/components';

import styles from '@views/MainPage/MainPage.module.css';

const SearchLayout = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const theme = useTheme();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className={`${styles.mainPage} ${styles[`mainPage_theme_${theme}`]}`}>
      <div className={styles.mainPageColumn}>
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
        <main className={styles.main}>
          <div className={`container ${styles.mainInner}`}>{children}</div>
        </main>
      </div>
    </div>
  );
};

export default SearchLayout;
