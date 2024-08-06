import { SearchProductsResponse } from '@services/types';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

export const calculateTotalPages = (
  productsResponse?: SearchProductsResponse,
): number => {
  return Math.ceil(
    productsResponse ? productsResponse.total / PRODUCTS_PER_PAGE_AMOUNT : 0,
  );
};
