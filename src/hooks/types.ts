import { DetailedProduct, SearchProductsResponse } from '@services/types';

export interface UseProductsResult {
  totalPages: number;
  isFetching: boolean;
  isSuccess: boolean;
  productsResponse: SearchProductsResponse | null;
}

export interface UseDetailedProductResult {
  detailedProduct: Nullable<DetailedProduct>;
  isFetching: boolean;
  isSuccess: boolean;
}
