import { ProductCard, StatusMessage } from '@/components';
import { ProductsListProps } from '@components/ProductsList/types';

import '@components/ProductsList/ProductsList.css';

const ProductsList = ({ products }: ProductsListProps) => {
  if (products.length === 0) {
    return <StatusMessage>No products were found</StatusMessage>;
  }

  return (
    <ul className="products-list">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
