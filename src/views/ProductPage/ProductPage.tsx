'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from '@/contexts';

import { useCurrentSearchPageUrl, useIsPageLoading } from '@/hooks';

import { StatusMessage } from '@/components';

import { ProductPageProps } from '@views/ProductPage/types';

import styles from '@views/ProductPage/ProductPage.module.css';

const ProductPage = ({ detailedProduct }: ProductPageProps) => {
  const theme = useTheme();
  const { isDetailsPageLoading, isSearchPageLoading } = useIsPageLoading();
  const currentSearchPageUrl = useCurrentSearchPageUrl();

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
                <Image
                  src={detailedProduct.images[0]}
                  alt={detailedProduct.title}
                  width={500}
                  height={500}
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
              <Link
                href={currentSearchPageUrl}
                className={styles.productPageButton}
              >
                Close
              </Link>
            </>
          }
        </div>
        <Link
          href={currentSearchPageUrl}
          className={styles.productPageShadow}
        />
      </div>
    );
};

export default ProductPage;
