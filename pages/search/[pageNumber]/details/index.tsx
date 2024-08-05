import { InferGetServerSidePropsType } from 'next';

import { wrapper } from '@store/store';
import { getProductById, getProducts } from '@store/api/apiSlice';

import { MainPage, ProductPage } from '@/views';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { product, q, pageNumber = 1 } = ctx.query;
    const searchQuery = typeof q === 'string' ? q : '';
    const productId = typeof product === 'string' ? Number(product) : 1;

    const getProductsPromise = store
      .dispatch(
        getProducts.initiate({
          searchQuery,
          page: Number(pageNumber),
        }),
      )
      .unwrap();
    const getProductByIdPromise = store
      .dispatch(getProductById.initiate(productId))
      .unwrap();

    const [productsResponse, detailedProduct] = await Promise.all([
      getProductsPromise,
      getProductByIdPromise,
    ]);

    const totalPages = Math.floor(
      productsResponse ? productsResponse.total / PRODUCTS_PER_PAGE_AMOUNT : 0,
    );

    return {
      props: {
        totalPages,
        productsResponse,
        detailedProduct,
      },
    };
  },
);

const DetailsPage = (props: {
  pageProps: InferGetServerSidePropsType<typeof getServerSideProps>;
}) => {
  const { productsResponse, totalPages, detailedProduct } = props.pageProps;

  return (
    <MainPage productsResponse={productsResponse} totalPages={totalPages}>
      <ProductPage detailedProduct={detailedProduct} />
    </MainPage>
  );
};

export default DetailsPage;
