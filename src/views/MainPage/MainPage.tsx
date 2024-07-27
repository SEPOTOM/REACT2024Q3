import { useOutlet } from 'react-router-dom';

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

import '@views/MainPage/MainPage.css';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const { productsResponse, totalPages, isFetching, isSuccess } =
    useProducts(searchQuery);
  const outlet = useOutlet();
  const theme = useTheme();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  const isProductsFetched = !isFetching && isSuccess && productsResponse;
  const hasFetchedProducts =
    !isFetching && isSuccess && (productsResponse?.products ?? []).length > 0;

  return (
    <div className={`main-page main-page_theme_${theme}`}>
      <div className="main-page__column">
        <header className="header">
          <div className="container header__inner">
            <ErrorButton />
            <SearchForm
              initialSearchQuery={searchQuery}
              onFormSubmit={handleSearchFormSubmit}
            />
            <ThemesComboBox />
          </div>
        </header>
        <main className="main">
          <div className="container main__inner">
            {isProductsFetched && (
              <ProductsList products={productsResponse.products} />
            )}
            {hasFetchedProducts && <Pagination totalPages={totalPages} />}
            {isFetching && <StatusMessage>Loading...</StatusMessage>}
            {isProductsFetched && <ProductsFlyout />}
          </div>
        </main>
      </div>
      {outlet && <div className="main-page__column">{outlet}</div>}
    </div>
  );
};

export default MainPage;
