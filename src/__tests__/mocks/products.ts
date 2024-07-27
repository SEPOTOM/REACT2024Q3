import { DetailedProduct } from '@services/types';

export const createFakeDetailedProduct = (
  productId: number,
): DetailedProduct => {
  return {
    id: productId,
    title: `Fake detailed product ${productId}`,
    description: `Fake detailed description ${productId}`,
    price: 99.99,
    category: `Fake detailed category ${productId}`,
    images: [`Fake detailed image url ${productId}`],
  };
};
