import {
  checkedProductsDeleted,
  selectCheckedProducts,
} from '@store/checkedProducts/checkedProductsSlice';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';

import '@components/ProductsFlyout/ProductsFlyout.css';

const ProductsFlyout = () => {
  const theme = useTheme();
  const checkedProducts = useAppSelector(selectCheckedProducts);
  const dispatch = useAppDispatch();

  const handleUnselectAllClick = () => {
    dispatch(checkedProductsDeleted());
  };

  return checkedProducts.length > 0 ?
      <div
        role="status"
        className={`products-flyout products-flyout_theme_${theme}`}
      >
        <div className="products-flyout__content">
          <p className="products-flyout__text">
            {checkedProducts.length}{' '}
            {checkedProducts.length > 1 ? 'products' : 'product'} selected
          </p>
          <button
            type="button"
            onClick={handleUnselectAllClick}
            className="products-flyout__button"
          >
            Unselect all
          </button>
        </div>
      </div>
    : null;
};

export default ProductsFlyout;
