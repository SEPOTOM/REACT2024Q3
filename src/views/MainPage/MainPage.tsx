'use client';

import { Pagination, ProductsFlyout, ProductsList } from '@/components';

import { MainPageProps } from '@views/MainPage/types';

const MainPage = ({ totalPages, productsResponse }: MainPageProps) => {
  return (
    <>
      <ProductsList products={productsResponse.products} />
      <Pagination totalPages={totalPages} />
      <ProductsFlyout />
    </>
  );
};

export default MainPage;
