import Link from 'next/link';

import {
  productChecked,
  productUnchecked,
  selectCheckedProductById,
} from '@store/checkedProducts/checkedProductsSlice';

import { useReceiveProductMutation } from '@store/api/apiSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';
import { useCurrentPage, useSearchQuery } from '@/hooks';

import { ProductCardProps } from '@components/ProductCard/types';

import styles from '@components/ProductCard/ProductCard.module.css';

const ProductCard = ({ product }: ProductCardProps) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const checkedProduct = useAppSelector((state) =>
    selectCheckedProductById(state, product.id),
  );
  const [receiveProduct] = useReceiveProductMutation();
  const currentPage = useCurrentPage();
  const searchQuery = useSearchQuery();

  const searchParams = new URLSearchParams({
    q: searchQuery,
    product: String(product.id),
  });

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
      className={`${styles.productCard} ${styles[`productCard_theme_${theme}`]}`}
    >
      <Link
        href={`/search/${currentPage}/details?${searchParams.toString()}`}
        className={styles.productCardLink}
      >
        <h2 className={styles.productCardTitle}>{product.title}</h2>
        <p className={styles.productCardText}>{product.description}</p>
      </Link>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        aria-label="Select product"
        className={styles.productCardCheckbox}
      />
    </li>
  );
};

export default ProductCard;
