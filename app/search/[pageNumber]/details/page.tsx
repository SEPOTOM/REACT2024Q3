import { getProductById, getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import { ProductPage, SearchPage, SearchPageColumns } from '@/views';

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
        <SearchPage
          productsResponse={productsResponse}
          totalPages={totalPages}
        />
      }
      aside={<ProductPage detailedProduct={detailedProduct} />}
    />
  );
};

export default DetailsPage;
