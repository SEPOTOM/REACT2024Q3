import {
  ErrorButton,
  Pagination,
  ProductsFlyout,
  ProductsList,
  SearchForm,
  StatusMessage,
  ThemesComboBox,
} from '@/components';

import { useTheme } from '@/contexts';

import { useIsPageLoading, useSearchQuery } from '@/hooks';

import { MainPageProps } from '@views/MainPage/types';

import styles from '@views/MainPage/MainPage.module.css';

const MainPage = ({
  children,
  totalPages,
  productsResponse,
}: MainPageProps) => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const theme = useTheme();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  const isPageLoading = useIsPageLoading();

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
          <div className={`container ${styles.mainInner}`}>
            {isPageLoading ?
              <StatusMessage>Loading...</StatusMessage>
            : <>
                <ProductsList products={productsResponse.products} />
                <Pagination totalPages={totalPages} />
                <ProductsFlyout />
              </>
            }
          </div>
        </main>
      </div>
      {children && <div className={styles.mainPageColumn}>{children}</div>}
    </div>
  );
};

export default MainPage;
