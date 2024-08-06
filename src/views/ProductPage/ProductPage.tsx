import Link from 'next/link';
import { useRouter } from 'next/router';

import { useTheme } from '@/contexts';

import { useCurrentPage, useIsPageLoading } from '@/hooks';

import { StatusMessage } from '@/components';

import { ProductPageProps } from '@views/ProductPage/types';

import styles from '@views/ProductPage/ProductPage.module.css';

const ProductPage = ({ detailedProduct }: ProductPageProps) => {
  const theme = useTheme();
  const currentPage = useCurrentPage();
  const { isDetailsPageLoading, isSearchPageLoading } = useIsPageLoading();
  const router = useRouter();

  const closeUrl = `/search/${currentPage}${router.query.q ? `?q=${router.query.q}` : ''}`;

  return isSearchPageLoading ? null : (
      <div
        className={`${styles.productPage} ${styles[`productPage_theme_${theme}`]}`}
      >
        <div className={styles.productPageContent}>
          {isDetailsPageLoading ?
            <StatusMessage>Loading...</StatusMessage>
          : <>
              <h2 className={styles.productPageTitle}>
                {detailedProduct.title}
              </h2>
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
              <Link href={closeUrl} className={styles.productPageButton}>
                Close
              </Link>
            </>
          }
        </div>
        <Link href={closeUrl} className={styles.productPageShadow} />
      </div>
    );
};

export default ProductPage;
