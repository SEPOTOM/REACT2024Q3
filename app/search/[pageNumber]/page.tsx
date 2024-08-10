import { getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import {
  Pagination,
  ProductsFlyout,
  ProductsList,
  SearchHeader,
} from '@/components';

import { SearchPageProps } from '@app/search/[pageNumber]/types';

import styles from '@views/MainPage/MainPage.module.css';

const SearchPage = async ({ params, searchParams }: SearchPageProps) => {
  const { pageNumber } = params;
  const { q } = searchParams;

  const productsResponse = await getProductsBySearchQuery(
    q || '',
    Number(pageNumber),
  );

  const totalPages = calculateTotalPages(productsResponse);

  return (
    <div className={styles.mainPageColumn}>
      <SearchHeader />
      <main className={styles.main}>
        <div className={`container ${styles.mainInner}`}>
          <ProductsList products={productsResponse.products} />
          <Pagination totalPages={totalPages} />
          <ProductsFlyout />
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
