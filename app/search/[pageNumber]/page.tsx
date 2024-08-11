import { getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import { Pagination, ProductsFlyout, ProductsList } from '@/components';
import { SearchPageColumns } from '@/views';

import { SearchPageProps } from '@app/search/[pageNumber]/types';

const Page = async ({ params, searchParams }: SearchPageProps) => {
  const { pageNumber } = params;
  const { q } = searchParams;

  const productsResponse = await getProductsBySearchQuery(
    q || '',
    Number(pageNumber),
  );

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
    />
  );
};

export default Page;
