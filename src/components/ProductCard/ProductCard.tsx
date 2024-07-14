import { Link } from 'react-router-dom';

import { ProductCardProps } from '@components/ProductCard/types';

import '@components/ProductCard/ProductCard.css';

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li key={product.id} className="products-list__item">
      <Link to={`details?product=${product.id}`}>
        <h2 className="products-list__title">{product.title}</h2>
        <p className="products-list__text">{product.description}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
