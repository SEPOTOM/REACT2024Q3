import { useState } from 'react';
import { Link } from 'react-router-dom';

import { productChecked } from '@store/checkedProducts/checkedProductsSlice';

import { useReceiveProductMutation } from '@store/api/apiSlice';
import { useAppDispatch } from '@store/hooks';
import { useTheme } from '@/contexts';

import { ProductCardProps } from '@components/ProductCard/types';

import '@components/ProductCard/ProductCard.css';

const ProductCard = ({ product }: ProductCardProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const [receiveProduct] = useReceiveProductMutation();
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = async () => {
    if (isChecked) {
      setIsChecked(false);
    } else {
      try {
        const detailedProduct = await receiveProduct(product.id).unwrap();
        dispatch(productChecked(detailedProduct));
        setIsChecked(true);
      } catch (err) {
        setIsChecked(false);
      }
    }
  };

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
        checked={isChecked}
        onChange={handleChange}
        aria-label="Select product"
        className="products-card__checkbox"
      />
    </li>
  );
};

export default ProductCard;
