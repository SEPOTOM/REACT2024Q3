import {
  checkedProductsDeleted,
  selectCheckedProducts,
} from '@store/checkedProducts/checkedProductsSlice';

import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useTheme } from '@/contexts';

import { convertProductsToCsvUrl } from '@utils/converters';

import '@components/ProductsFlyout/ProductsFlyout.css';

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
        className={`products-flyout products-flyout_theme_${theme}`}
      >
        <div className="products-flyout__content">
          <p className="products-flyout__text">
            {checkedProductsAmount} {productString} selected
          </p>
          <button
            type="button"
            onClick={handleUnselectAllClick}
            className="products-flyout__button"
          >
            Unselect all
          </button>
          <a
            href={convertProductsToCsvUrl(checkedProducts)}
            download={`${checkedProductsAmount}_${productString}.csv`}
            className="products-flyout__button"
          >
            Download
          </a>
        </div>
      </div>
    : null;
};

export default ProductsFlyout;
