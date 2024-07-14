import { ProductsListProps } from '@components/ProductsList/types';

import '@components/ProductsList/ProductsList.css';

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <ul className="products-list">
      {products.map((product) => (
        <li key={product.id} className="products-list__item">
          <h2 className="products-list__title">{product.title}</h2>
          <p className="products-list__text">{product.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
