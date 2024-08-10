'use client';

import Link from 'next/link';

import { useSearchPageUrl } from '@/hooks';

import styles from '@views/ProductPage/ProductPage.module.css';

const DetailsPageShadow = () => {
  const searchPageUrl = useSearchPageUrl();

  return <Link href={searchPageUrl} className={styles.productPageShadow} />;
};

export default DetailsPageShadow;
