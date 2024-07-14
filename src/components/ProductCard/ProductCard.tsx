import { Link } from 'react-router-dom';

import { ProductCardProps } from '@components/ProductCard/types';

import '@components/ProductCard/ProductCard.css';

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li key={product.id} className="products-card">
      <Link
        to={`details?product=${product.id}`}
        className="products-card__link"
      >
        <h2 className="products-card__title">{product.title}</h2>
        <p className="products-card__text">{product.description}</p>
      </Link>
    </li>
  );
};

export default ProductCard;
