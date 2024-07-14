import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductsBySearchQuery } from '@services/api';
import { Product } from '@services/types';

const useProducts = (searchQuery: string): Product[] | null => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const { searchPage } = useParams();

  const currentPage = searchPage ? Number(searchPage) : 1;

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async (): Promise<void> => {
      setProducts(null);

      const newProducts = await getProductsBySearchQuery(
        searchQuery.trim(),
        currentPage,
      );

      if (isMounted) {
        setProducts(newProducts);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [searchQuery, currentPage]);

  return products;
};

export default useProducts;
