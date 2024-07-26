import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { SearchProductsResponse } from '@services/types';
import { GetProductsParams } from '@store/api/types';

import { PRODUCTS_PER_PAGE_AMOUNT } from '@/consts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
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
  }),
});

export const { useGetProductsQuery } = apiSlice;
