import { Link } from 'react-router-dom';

import { StatusMessage } from '@/components';
import { ProductsListProps } from '@components/ProductsList/types';

import '@components/ProductsList/ProductsList.css';

const ProductsList = ({ products }: ProductsListProps) => {
  if (products.length === 0) {
    return <StatusMessage>No products were found</StatusMessage>;
  }

  return (
    <ul className="products-list">
      {products.map((product) => (
        <li key={product.id} className="products-list__item">
          <Link to={`details?product=${product.id}`}>
            <h2 className="products-list__title">{product.title}</h2>
            <p className="products-list__text">{product.description}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
