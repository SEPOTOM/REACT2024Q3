import { useEffect, useState } from 'react';

import { getProductsBySearchQuery } from '@services/api';

import {
  ErrorButton,
  ProductsList,
  SearchForm,
  StatusMessage,
} from '@/components';

import { Product } from '@services/types';

import '@views/MainPage/MainPage.css';

const MainPage = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async (): Promise<void> => {
      setProducts(null);

      const newProducts = await getProductsBySearchQuery(searchQuery.trim());

      if (isMounted) {
        setProducts(newProducts);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [searchQuery]);

  const handleSearchQueryUpdate = (newSearchQuery: string): void => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <ErrorButton />
          <SearchForm onInputUpdate={handleSearchQueryUpdate} />
        </div>
      </header>
      <main className="main">
        <div className="container main__inner">
          {products && products.length > 0 && (
            <ProductsList products={products} />
          )}
          {products === null && <StatusMessage>Loading...</StatusMessage>}
        </div>
      </main>
    </>
  );
};

export default MainPage;
