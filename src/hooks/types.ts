import { SearchProductsResponse } from '@services/types';

export interface UseProductsResult {
  totalPages: number;
  isFetching: boolean;
  isSuccess: boolean;
  productsResponse: SearchProductsResponse | null;
}
