import { Link } from 'react-router-dom';

import {
  productChecked,
  productUnchecked,
  selectCheckedProductById,
} from '@store/checkedProducts/checkedProductsSlice';

import { useReceiveProductMutation } from '@store/api/apiSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';

import { ProductCardProps } from '@components/ProductCard/types';

import '@components/ProductCard/ProductCard.css';

const ProductCard = ({ product }: ProductCardProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const checkedProduct = useAppSelector((state) =>
    selectCheckedProductById(state, product.id),
  );
  const [receiveProduct] = useReceiveProductMutation();

  const isChecked = Boolean(checkedProduct);

  const handleChange = async () => {
    if (isChecked) {
      dispatch(productUnchecked(product.id));
    } else {
      try {
        const detailedProduct = await receiveProduct(product.id).unwrap();
        dispatch(productChecked(detailedProduct));
      } catch (err) {
        dispatch(productUnchecked(product.id));
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
