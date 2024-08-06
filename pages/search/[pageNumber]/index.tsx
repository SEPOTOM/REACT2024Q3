import { InferGetServerSidePropsType } from 'next';

import { wrapper } from '@store/store';
import { getProducts } from '@store/api/apiSlice';

import { calculateTotalPages } from '@utils/numbers';

import { MainPage } from '@/views';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { q, pageNumber = 1 } = ctx.query;
    const searchQuery = typeof q === 'string' ? q : '';

    const productsResponse = await store
      .dispatch(
        getProducts.initiate({
          searchQuery,
          page: Number(pageNumber),
        }),
      )
      .unwrap();

    const totalPages = calculateTotalPages(productsResponse);

    return {
      props: {
        totalPages,
        productsResponse,
      },
    };
  },
);

const SearchPage = (props: {
  pageProps: InferGetServerSidePropsType<typeof getServerSideProps>;
}) => {
  return <MainPage {...props.pageProps} />;
};

export default SearchPage;
