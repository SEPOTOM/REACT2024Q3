'use client';

import { useTheme } from '@/contexts';

import { SearchHeader } from '@/components';

import { SearchPageColumnsProps } from '@/views/SearchPageColumns/types';

import styles from '@views/SearchPageColumns/SearchPageColumns.module.css';

const SearchPageColumns = ({ main, aside }: SearchPageColumnsProps) => {
  const theme = useTheme();

  return (
    <div
      className={`${styles.searchPageColumns} ${styles[`searchPageColumns_theme_${theme}`]}`}
    >
      <div className={styles.searchPageColumnsColumn}>
        <SearchHeader />
        <main className={styles.searchPageColumnsMain}>
          <div className={`container ${styles.searchPageColumnsMainInner}`}>
            {main}
          </div>
        </main>
      </div>
      {aside && <div className={styles.searchPageColumnsColumn}>{aside}</div>}
    </div>
  );
};

export default SearchPageColumns;
