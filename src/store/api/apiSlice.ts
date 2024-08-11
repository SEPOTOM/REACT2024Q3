import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { DetailedProduct } from '@services/types';

import { BASE_API_URL } from '@/consts';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_API_URL }),
  endpoints: (builder) => ({
    receiveProduct: builder.mutation<DetailedProduct, number>({
      query: (productId) => {
        let pathname = `/products/${productId}`;
        const searchParams = new URLSearchParams({
          select: 'title,description,category,price,images',
        });

        pathname += `?${searchParams.toString()}`;

        return pathname;
      },
    }),
  }),
});

export const { useReceiveProductMutation } = apiSlice;
