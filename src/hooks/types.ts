import { Product } from '@services/types';

export interface ProductsData {
  productsForPage: Product[];
  totalPages: number;
}
