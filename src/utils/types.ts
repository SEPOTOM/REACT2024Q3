import { DetailedProduct } from '@services/types';

export type SaveableProduct = Omit<
  DetailedProduct,
  'id' | 'price' | 'images'
> & {
  imageUrl: string;
  price: string;
  id: string;
};
