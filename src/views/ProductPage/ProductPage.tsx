import { Link, useParams } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { useDetailedProduct } from '@/hooks';

import { validatePage } from '@/utils/validation';

import { StatusMessage } from '@/components';

import styles from '@views/ProductPage/ProductPage.module.css';

const ProductPage = () => {
  const { detailedProduct, isFetching, isSuccess } = useDetailedProduct();
  const { searchPage } = useParams();
  const theme = useTheme();

  const currentPage = validatePage(searchPage);

  const closeUrl = `/search/${currentPage}`;

  const isFetched = !isFetching && isSuccess && detailedProduct;

  return (
    <div
      className={`${styles.productPage} ${styles[`productPage_theme_${theme}`]}`}
    >
      <div className={styles.productPageContent}>
        {isFetched ?
          <>
            <h2 className={styles.productPageTitle}>{detailedProduct.title}</h2>
            {detailedProduct.images[0] && (
              <img
                src={detailedProduct.images[0]}
                alt={detailedProduct.title}
                className={styles.productPageImage}
              />
            )}
            <p className={styles.productPageDescription}>
              {detailedProduct.description}
            </p>
            <p className={styles.productPageFeature}>
              Category: {detailedProduct.category}
            </p>
            <p className={styles.productPageFeature}>
              Price: ${detailedProduct.price}
            </p>
            <Link to={closeUrl} className={styles.productPageButton}>
              Close
            </Link>
          </>
        : <StatusMessage>Loading...</StatusMessage>}
      </div>
      <Link to={closeUrl} className={styles.productPageShadow} />
    </div>
  );
};

export default ProductPage;
