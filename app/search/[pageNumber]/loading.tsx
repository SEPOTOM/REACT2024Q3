import { SearchHeader, StatusMessage } from '@/components';

import styles from '@views/MainPage/MainPage.module.css';

const SearchLoading = () => {
  return (
    <div className={styles.mainPageColumn}>
      <SearchHeader />
      <main className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <StatusMessage>Loading...</StatusMessage>
        </div>
      </main>
    </div>
  );
};

export default SearchLoading;
