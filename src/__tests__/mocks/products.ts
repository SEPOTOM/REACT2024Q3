import { DetailedProduct, Product } from '@services/types';

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

export const createFakeProduct = (productId: number): Product => {
  return {
    id: productId,
    title: `Fake product ${productId}`,
    description: `Fake description ${productId}`,
  };
};

export const createFakeProducts = (productsAmount: number): Product[] => {
  const fakeProducts: Product[] = [];

  for (let i = 0; i < productsAmount; i += 1) {
    fakeProducts.push(createFakeProduct(i + 1));
  }

  return fakeProducts;
};
