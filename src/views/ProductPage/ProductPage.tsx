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
      <h2>{title}</h2>
      {images[0] && <img src={images[0]} alt={title} />}
      <p>{description}</p>
      <p>Category: {category}</p>
      <p>Price: ${price}</p>
      <Link to={closeUrl}>Close</Link>
      <Link to={closeUrl}>
        <div className="product-page__shadow"></div>
      </Link>
    </div>
  );
};

export default ProductPage;
