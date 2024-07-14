import { Link, useParams } from 'react-router-dom';

import { useDetailedProduct } from '@/hooks';

import { validatePage } from '@/utils/validation';

import { StatusMessage } from '@/components';

import '@views/ProductPage/ProductPage.css';

const ProductPage = () => {
  const detailedProduct = useDetailedProduct();
  const { searchPage } = useParams();

  if (!detailedProduct) {
    return <StatusMessage>Loading...</StatusMessage>;
  }

  const { title, description, category, price, images } = detailedProduct;

  const currentPage = validatePage(searchPage);

  const closeUrl = `/search/${currentPage}`;

  return (
    <div className="product-page">
      <div className="product-page__content">
        <h2 className="product-page__title">{title}</h2>
        {images[0] && (
          <img src={images[0]} alt={title} className="product-page__image" />
        )}
        <p className="product-page__description">{description}</p>
        <p className="product-page__feature">Category: {category}</p>
        <p className="product-page__feature">Price: ${price}</p>
        <Link to={closeUrl} className="product-page__button">
          Close
        </Link>
      </div>
      <Link to={closeUrl} className="product-page__shadow" />
    </div>
  );
};

export default ProductPage;
