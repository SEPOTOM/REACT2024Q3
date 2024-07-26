import { DetailedProduct } from '@services/types';
import { SaveableProduct } from '@utils/types';

export const convertToSaveableProduct = (
  product: DetailedProduct,
): SaveableProduct => {
  return {
    id: String(product.id),
    title: product.title || 'Unknown title',
    description: product.description || 'Unknown description',
    price: String(product.price) || 'Unknown price',
    category: product.category || 'Unknown category',
    imageUrl:
      product.images && product.images[0] ?
        product.images[0]
      : 'Unknown image url',
  };
};
