import { useOutlet } from 'react-router-dom';

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
  const outlet = useOutlet();

  const handleSearchFormSubmit = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <div className="main-page">
      <div className="main-page__column">
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
      </div>
      {outlet && <div className="main-page__column">{outlet}</div>}
    </div>
  );
};

export default MainPage;
