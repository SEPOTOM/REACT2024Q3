import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getDetailedProductQuery } from '@store/api/utils';

import { DetailedProduct } from '@services/types';

import { BASE_API_URL } from '@/consts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    receiveProduct: builder.mutation<DetailedProduct, number>({
      query: (productId) => getDetailedProductQuery(productId),
    }),
  }),
});

export const { useReceiveProductMutation } = apiSlice;
