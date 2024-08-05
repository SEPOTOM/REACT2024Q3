import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getDetailedProductQuery } from '@store/api/utils';

import { DetailedProduct, SearchProductsResponse } from '@services/types';
import { GetProductsParams } from '@store/api/types';

import { BASE_API_URL, PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query<SearchProductsResponse, GetProductsParams>({
      query: ({ searchQuery, page = 1 }) => {
        let pathname = '/products';
        const searchParams = new URLSearchParams({
          limit: String(PRODUCTS_PER_PAGE_AMOUNT),
          select: 'title,description',
          skip: String((page - 1) * PRODUCTS_PER_PAGE_AMOUNT),
        });

        if (searchQuery) {
          pathname += '/search';
          searchParams.append('q', searchQuery);
        }

        pathname += `?${searchParams.toString()}`;

        return pathname;
      },
    }),
    getProductById: builder.query<DetailedProduct, number>({
      query: (productId) => getDetailedProductQuery(productId),
    }),
    receiveProduct: builder.mutation<DetailedProduct, number>({
      query: (productId) => getDetailedProductQuery(productId),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useReceiveProductMutation,
} = apiSlice;

export const { getProducts, getProductById } = apiSlice.endpoints;
