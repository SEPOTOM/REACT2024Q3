import { ReactNode } from 'react';

import { SearchProductsResponse } from '@services/types';

export interface SearchPageProps {
  children?: ReactNode;
  totalPages: number;
  productsResponse: SearchProductsResponse;
}
