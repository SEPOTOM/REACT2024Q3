import { useParams } from 'react-router-dom';

import { useGetProductsQuery } from '@/store/api/apiSlice';

import { validatePage } from '@/utils/validation';

import { ProductsData } from '@hooks/types';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

const useProducts = (searchQuery: string): ProductsData | null => {
  const { searchPage } = useParams();
  const currentPage = validatePage(searchPage);

  const { data: productsResponse } = useGetProductsQuery({
    searchQuery,
    page: currentPage,
  });

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
