import Link from 'next/link';

import { useTheme } from '@/contexts';

import { useCurrentPage, useIsPageLoading, useSearchQuery } from '@/hooks';

import { StatusMessage } from '@/components';

import { ProductPageProps } from '@views/ProductPage/types';

import styles from '@views/ProductPage/ProductPage.module.css';

const ProductPage = ({ detailedProduct }: ProductPageProps) => {
  const theme = useTheme();
  const currentPage = useCurrentPage();
  const isPageLoading = useIsPageLoading();
  const searchQuery = useSearchQuery();

  const closeUrl = `/search/${currentPage}${searchQuery ? `?q=${searchQuery}` : ''}`;

  return (
    <div
      className={`${styles.productPage} ${styles[`productPage_theme_${theme}`]}`}
    >
      <div className={styles.productPageContent}>
        {!isPageLoading ?
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
            <Link href={closeUrl} className={styles.productPageButton}>
              Close
            </Link>
          </>
        : <StatusMessage>Loading...</StatusMessage>}
      </div>
      <Link href={closeUrl} className={styles.productPageShadow} />
    </div>
  );
};

export default ProductPage;
