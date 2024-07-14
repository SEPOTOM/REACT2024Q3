import { useEffect, useState } from 'react';

import { getProductsBySearchQuery } from '@services/api';
import { Product } from '@services/types';

const useProducts = (searchQuery: string): Product[] | null => {
  const [products, setProducts] = useState<Product[] | null>(null);

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

  return products;
};

export default useProducts;
