import { Link, useParams } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { useDetailedProduct } from '@/hooks';

import { validatePage } from '@/utils/validation';

import { StatusMessage } from '@/components';

import '@views/ProductPage/ProductPage.css';

const ProductPage = () => {
  const { detailedProduct, isFetching, isSuccess } = useDetailedProduct();
  const { searchPage } = useParams();
  const theme = useTheme();

  const currentPage = validatePage(searchPage);

  const closeUrl = `/search/${currentPage}`;

  const isFetched = !isFetching && isSuccess && detailedProduct;

  return (
    <div className={`product-page product-page_theme_${theme}`}>
      <div className="product-page__content">
        {isFetched ?
          <>
            <h2 className="product-page__title">{detailedProduct.title}</h2>
            {detailedProduct.images[0] && (
              <img
                src={detailedProduct.images[0]}
                alt={detailedProduct.title}
                className="product-page__image"
              />
            )}
            <p className="product-page__description">
              {detailedProduct.description}
            </p>
            <p className="product-page__feature">
              Category: {detailedProduct.category}
            </p>
            <p className="product-page__feature">
              Price: ${detailedProduct.price}
            </p>
            <Link to={closeUrl} className="product-page__button">
              Close
            </Link>
          </>
        : <StatusMessage>Loading...</StatusMessage>}
      </div>
      <Link to={closeUrl} className="product-page__shadow" />
    </div>
  );
};

export default ProductPage;
