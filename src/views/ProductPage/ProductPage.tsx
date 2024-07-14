import { Link, useParams } from 'react-router-dom';

import { useDetailedProduct } from '@/hooks';

import { validatePage } from '@/utils/validation';

import { StatusMessage } from '@/components';

import '@views/ProductPage/ProductPage.css';

const ProductPage = () => {
  const detailedProduct = useDetailedProduct();
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  const closeUrl = `/search/${currentPage}`;

  return (
    <div className="product-page">
      <div className="product-page__content">
        {detailedProduct ?
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
