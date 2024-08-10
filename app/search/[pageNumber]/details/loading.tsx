import { DetailsPageShadow, SearchHeader, StatusMessage } from '@/components';

import styles from '@views/MainPage/MainPage.module.css';

const DetailsLoading = () => {
  return (
    <>
      <div className={styles.mainPageColumn}>
        <SearchHeader />
        <main className={styles.main}>
          <div className={`container ${styles.mainInner}`}>
            <StatusMessage>Loading...</StatusMessage>
          </div>
        </main>
      </div>
      <div className={styles.mainPageColumn}>
        <StatusMessage>Loading...</StatusMessage>
        <DetailsPageShadow />
      </div>
    </>
  );
};

export default DetailsLoading;
