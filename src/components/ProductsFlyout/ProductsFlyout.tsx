import { selectCheckedProducts } from '@store/checkedProducts/checkedProductsSlice';

import { useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';

import '@components/ProductsFlyout/ProductsFlyout.css';

const ProductsFlyout = () => {
  const theme = useTheme();
  const checkedProducts = useAppSelector(selectCheckedProducts);

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
        </div>
      </div>
    : null;
};

export default ProductsFlyout;
