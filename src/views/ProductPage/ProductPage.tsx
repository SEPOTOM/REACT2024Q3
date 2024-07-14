import { Link, useParams } from 'react-router-dom';

import { validatePage } from '@/utils/validation';

import '@views/ProductPage/ProductPage.css';

const ProductPage = () => {
  const { searchPage } = useParams();

  const currentPage = validatePage(searchPage);

  const closeUrl = `/search/${currentPage}`;

  return (
    <div className="product-page">
      ProductPage
      <Link to={closeUrl}>Close</Link>
      <Link to={closeUrl}>
        <div className="product-page__shadow"></div>
      </Link>
    </div>
  );
};

export default ProductPage;
