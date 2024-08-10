import { getProductsBySearchQuery } from '@services/api';

import { calculateTotalPages } from '@utils/numbers';

import { MainPage } from '@/views';

import { SearchPageProps } from '@app/search/[pageNumber]/types';

const SearchPage = async ({ params, searchParams }: SearchPageProps) => {
  const { pageNumber } = params;
  const { q } = searchParams;

  const productsResponse = await getProductsBySearchQuery(
    q || '',
    Number(pageNumber),
  );

  const totalPages = calculateTotalPages(productsResponse);

  return (
    <MainPage productsResponse={productsResponse} totalPages={totalPages} />
  );
};

export default SearchPage;
