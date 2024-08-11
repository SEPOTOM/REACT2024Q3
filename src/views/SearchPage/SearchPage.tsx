'use client';

import { Pagination, ProductsFlyout, ProductsList } from '@/components';

import { SearchPageProps } from '@/views/SearchPage/types';

const SearchPage = ({ totalPages, productsResponse }: SearchPageProps) => {
  return (
    <>
      <ProductsList products={productsResponse.products} />
      <Pagination totalPages={totalPages} />
      <ProductsFlyout />
    </>
  );
};

export default SearchPage;
