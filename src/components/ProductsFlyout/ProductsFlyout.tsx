import {
  checkedProductsDeleted,
  selectCheckedProducts,
} from '@store/checkedProducts/checkedProductsSlice';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';

import { convertProductsToCsvUrl } from '@utils/converters';

import styles from '@components/ProductsFlyout/ProductsFlyout.module.css';

const ProductsFlyout = () => {
  const theme = useTheme();
  const checkedProducts = useAppSelector(selectCheckedProducts);
  const dispatch = useAppDispatch();

  const handleUnselectAllClick = () => {
    dispatch(checkedProductsDeleted());
  };

  const checkedProductsAmount = checkedProducts.length;
  const productString = checkedProductsAmount > 1 ? 'products' : 'product';

  return checkedProductsAmount > 0 ?
      <div
        role="status"
        className={`${styles.productsFlyout} ${styles[`productsFlyout_theme_${theme}`]}`}
      >
        <div className={styles.productsFlyoutContent}>
          <p className={styles.productsFlyoutText}>
            {checkedProductsAmount} {productString} selected
          </p>
          <button
            type="button"
            onClick={handleUnselectAllClick}
            className={styles.productsFlyoutButton}
          >
            Unselect all
          </button>
          <a
            href={convertProductsToCsvUrl(checkedProducts)}
            download={`${checkedProductsAmount}_${productString}.csv`}
            className={styles.productsFlyoutButton}
          >
            Download
          </a>
        </div>
      </div>
    : null;
};

export default ProductsFlyout;
