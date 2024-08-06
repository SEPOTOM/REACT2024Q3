import { ProductCard, StatusMessage } from '@/components';
import { ProductsListProps } from '@components/ProductsList/types';

import styles from '@components/ProductsList/ProductsList.module.css';

const ProductsList = ({ products }: ProductsListProps) => {
  if (products.length === 0) {
    return <StatusMessage>No products were found</StatusMessage>;
  }

  return (
    <ul className={styles.productsList}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductsList;
