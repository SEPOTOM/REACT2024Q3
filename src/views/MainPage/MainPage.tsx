import {
  ErrorButton,
  Pagination,
  ProductsList,
  SearchForm,
  StatusMessage,
} from '@/components';

import { useProducts, useSearchQuery } from '@/hooks';

import '@views/MainPage/MainPage.css';

const MainPage = () => {
  const [searchQuery, setSearchQuery] = useSearchQuery();
  const products = useProducts(searchQuery);

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <ErrorButton />
          <SearchForm
            initialSearchQuery={searchQuery}
            onFormSubmit={handleSearchFormSubmit}
          />
        </div>
      </header>
      <main className="main">
        <div className="container main__inner">
          {products && products.length > 0 && (
            <>
              <ProductsList products={products} />
              <Pagination />
            </>
          )}
          {products === null && <StatusMessage>Loading...</StatusMessage>}
        </div>
      </main>
    </>
  );
};

export default MainPage;
