import { Link } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { ProductCardProps } from '@components/ProductCard/types';

import '@components/ProductCard/ProductCard.css';

const ProductCard = ({ product }: ProductCardProps) => {
  const theme = useTheme();

  return (
    <li
      key={product.id}
      className={`products-card products-card_theme_${theme}`}
    >
      <Link
        to={`details?product=${product.id}`}
        className="products-card__link"
      >
        <h2 className="products-card__title">{product.title}</h2>
        <p className="products-card__text">{product.description}</p>
      </Link>
      <input
        type="checkbox"
        aria-label="Select product"
        className="products-card__checkbox"
      />
    </li>
  );
};

export default ProductCard;
