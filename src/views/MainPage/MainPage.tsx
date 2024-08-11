'use client';

import {
  Pagination,
  ProductsFlyout,
  ProductsList,
  SearchHeader,
} from '@/components';

import { useTheme } from '@/contexts';

import { MainPageProps } from '@views/MainPage/types';

import styles from '@views/MainPage/MainPage.module.css';

const MainPage = ({
  children,
  totalPages,
  productsResponse,
}: MainPageProps) => {
  const theme = useTheme();

  return (
    <div className={`${styles.mainPage} ${styles[`mainPage_theme_${theme}`]}`}>
      <div className={styles.mainPageColumn}>
        <SearchHeader />
        <main className={styles.main}>
          <div className={`container ${styles.mainInner}`}>
            <ProductsList products={productsResponse.products} />
            <Pagination totalPages={totalPages} />
            <ProductsFlyout />
          </div>
        </main>
      </div>
      {children && <div className={styles.mainPageColumn}>{children}</div>}
    </div>
  );
};

export default MainPage;
