import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { getProductById } from '@services/api';
import { DetailedProduct } from '@services/types';

const useDetailedProduct = (): DetailedProduct | null => {
  const [detailedProduct, setDetailedProduct] =
    useState<DetailedProduct | null>(null);
  const [searchParams] = useSearchParams();

  const productSearchParam = searchParams.get('product');
  const productId = productSearchParam ? Number(productSearchParam) : 1;

  useEffect(() => {
    let isMounted = true;

    const fetchDetailedProduct = async (): Promise<void> => {
      setDetailedProduct(null);

      const newProducts = await getProductById(productId);

      if (isMounted) {
        setDetailedProduct(newProducts);
      }
    };

    fetchDetailedProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  return detailedProduct;
};

export default useDetailedProduct;
