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

import { useProducts, useSearchQuery } from '@/hooks';

import { MainPageProps } from '@views/MainPage/types';

import styles from '@views/MainPage/MainPage.module.css';

const MainPage = ({ children }: MainPageProps) => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const { productsResponse, totalPages, isFetching, isSuccess } =
    useProducts(searchQuery);
  const theme = useTheme();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  const isProductsFetched = !isFetching && isSuccess && productsResponse;
  const hasFetchedProducts =
    !isFetching && isSuccess && (productsResponse?.products ?? []).length > 0;

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
            {isProductsFetched && (
              <ProductsList products={productsResponse.products} />
            )}
            {hasFetchedProducts && <Pagination totalPages={totalPages} />}
            {isFetching && <StatusMessage>Loading...</StatusMessage>}
            {isProductsFetched && <ProductsFlyout />}
          </div>
        </main>
      </div>
      {children && <div className={styles.mainPageColumn}>{children}</div>}
    </div>
  );
};

export default MainPage;
