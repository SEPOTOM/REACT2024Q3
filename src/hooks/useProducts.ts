import { useParams } from 'react-router-dom';

import { useGetProductsQuery } from '@store/api/apiSlice';

import { validatePage } from '@utils/validation';

import { UseProductsResult } from '@/hooks/types';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

const useProducts = (searchQuery: string): UseProductsResult => {
  const { searchPage } = useParams();
  const currentPage = validatePage(searchPage);

  const { data: productsResponse = null, ...response } = useGetProductsQuery({
    searchQuery,
    page: currentPage,
  });

  const totalPages = Math.floor(
    productsResponse ? productsResponse.total / PRODUCTS_PER_PAGE_AMOUNT : 0,
  );

  return {
    totalPages,
    productsResponse,
    ...response,
  };
};

export default useProducts;
