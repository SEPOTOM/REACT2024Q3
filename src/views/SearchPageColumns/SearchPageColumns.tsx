'use client';

import { useTheme } from '@/contexts';

import { SearchHeader } from '@/components';

import { SearchPageColumnsProps } from '@/views/SearchPageColumns/types';

import styles from '@views/MainPage/MainPage.module.css';

const SearchPageColumns = ({ main, aside }: SearchPageColumnsProps) => {
  const theme = useTheme();

  return (
    <div className={`${styles.mainPage} ${styles[`mainPage_theme_${theme}`]}`}>
      <div className={styles.mainPageColumn}>
        <SearchHeader />
        <main className={styles.main}>
          <div className={`container ${styles.mainInner}`}>{main}</div>
        </main>
      </div>
      {aside && <div className={styles.mainPageColumn}>{aside}</div>}
    </div>
  );
};

export default SearchPageColumns;
