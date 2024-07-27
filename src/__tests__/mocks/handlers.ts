import { HttpHandler, HttpResponse, http } from 'msw';

import { createFakeDetailedProduct } from '@tests/mocks/products';

import { BASE_API_URL } from '@/consts';

export const handlers: HttpHandler[] = [
  http.get(new RegExp(`^${BASE_API_URL}/products(/search)?$`), () => {
    return HttpResponse.json({
      total: 2,
      products: [
        { title: 'Product 1', description: 'Description 1', id: 1 },
        { title: 'Product 2', description: 'Description 2', id: 2 },
      ],
    });
  }),
  http.get(`${BASE_API_URL}/products/:productId`, ({ params }) => {
    const { productId } = params;

    return HttpResponse.json(createFakeDetailedProduct(Number(productId)));
  }),
];
