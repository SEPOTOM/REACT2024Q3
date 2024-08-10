'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { useTheme } from '@/contexts';
import { useCurrentPage } from '@/hooks';

import { ProductPageProps } from '@views/ProductPage/types';

import styles from '@views/ProductPage/ProductPage.module.css';

const ProductPage = ({ detailedProduct }: ProductPageProps) => {
  const theme = useTheme();
  const currentPage = useCurrentPage();
  const searchParams = useSearchParams();

  const customSearchParams = new URLSearchParams(searchParams || {});
  customSearchParams.delete('product');
  const queryString = customSearchParams.toString();

  const closeUrl = `/search/${currentPage}${queryString ? `?${queryString}` : ''}`;

  return (
    <div
      className={`${styles.productPage} ${styles[`productPage_theme_${theme}`]}`}
    >
      <div className={styles.productPageContent}>
        <h2 className={styles.productPageTitle}>{detailedProduct.title}</h2>
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
        <Link href={closeUrl} className={styles.productPageButton}>
          Close
        </Link>
      </div>
      <Link href={closeUrl} className={styles.productPageShadow} />
    </div>
  );
};

export default ProductPage;
