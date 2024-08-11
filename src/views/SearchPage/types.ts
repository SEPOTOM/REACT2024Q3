import { SearchProductsResponse } from '@services/types';

export interface SearchPageProps {
  totalPages: number;
  productsResponse: SearchProductsResponse;
}
