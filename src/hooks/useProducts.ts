import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getProductsBySearchQuery } from '@services/api';
import { SearchProductsResponse } from '@services/types';

import { validatePage } from '@/utils/validation';

import { ProductsData } from '@hooks/types';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

const useProducts = (searchQuery: string): ProductsData | null => {
  const [productsResponse, setProductsResponse] =
    useState<SearchProductsResponse | null>(null);
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  useEffect(() => {
    let isMounted = true;

    const fetchProducts = async (): Promise<void> => {
      setProductsResponse(null);

      const newProductsResponse = await getProductsBySearchQuery(
        searchQuery.trim(),
        currentPage,
      );

      if (isMounted) {
        setProductsResponse(newProductsResponse);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, [searchQuery, currentPage]);

  const totalPages = Math.floor(
    productsResponse ? productsResponse.total / PRODUCTS_PER_PAGE_AMOUNT : 0,
  );

  return productsResponse ?
      {
        productsForPage: productsResponse.products,
        totalPages,
      }
    : null;
};

export default useProducts;
