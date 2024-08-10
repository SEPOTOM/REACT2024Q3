import { getProductById, getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import { ProductPage } from '@/views';
import {
  Pagination,
  ProductsFlyout,
  ProductsList,
  SearchHeader,
} from '@/components';

import { DetailsPageProps } from '@app/search/[pageNumber]/details/types';

import styles from '@views/MainPage/MainPage.module.css';

const DetailsPage = async ({ params, searchParams }: DetailsPageProps) => {
  const { pageNumber } = params;
  const { q, product } = searchParams;

  const productsResponsePromise = getProductsBySearchQuery(
    q || '',
    Number(pageNumber),
  );
  const detailedProductPromise = getProductById(Number(product));

  const [productsResponse, detailedProduct] = await Promise.all([
    productsResponsePromise,
    detailedProductPromise,
  ]);

  const totalPages = calculateTotalPages(productsResponse);

  return (
    <>
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
      <div className={styles.mainPageColumn}>
        <ProductPage detailedProduct={detailedProduct} />
      </div>
    </>
  );
};

export default DetailsPage;
