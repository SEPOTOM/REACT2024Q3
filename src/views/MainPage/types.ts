import { ReactNode } from 'react';

import { SearchProductsResponse } from '@services/types';

export interface MainPageProps {
  children?: ReactNode;
  totalPages: number;
  productsResponse: SearchProductsResponse;
}
