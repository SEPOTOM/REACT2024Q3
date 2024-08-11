import { getProductById, getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import { Pagination, ProductsFlyout, ProductsList } from '@/components';
import { ProductPage, SearchPageColumns } from '@/views';

import { DetailsPageProps } from '@app/search/[pageNumber]/details/types';

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
    <SearchPageColumns
      main={
        <>
          <ProductsList products={productsResponse.products} />
          <Pagination totalPages={totalPages} />
          <ProductsFlyout />
        </>
      }
      aside={<ProductPage detailedProduct={detailedProduct} />}
    />
  );
};

export default DetailsPage;
