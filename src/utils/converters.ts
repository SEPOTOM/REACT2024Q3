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

export const convertProductsToCsvUrl = (products: DetailedProduct[]) => {
  const titleKeys = Object.keys(convertToSaveableProduct(products[0]));

  const refinedData = [titleKeys];

  products.forEach((product) =>
    refinedData.push(Object.values(convertToSaveableProduct(product))),
  );

  let csvContent = '';

  refinedData.forEach((row) => {
    csvContent += row.join('|') + '\n';
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' });
  return URL.createObjectURL(blob);
};
