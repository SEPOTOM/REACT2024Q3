'use client';

import Link from 'next/link';

import { useSearchPageUrl } from '@/hooks';

import styles from '@components/DetailsPageShadow/DetailsPageShadow.module.css';

const DetailsPageShadow = () => {
  const searchPageUrl = useSearchPageUrl();

  return <Link href={searchPageUrl} className={styles.detailsPageShadow} />;
};

export default DetailsPageShadow;
