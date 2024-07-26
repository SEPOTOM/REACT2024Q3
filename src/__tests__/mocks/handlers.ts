import { HttpHandler, HttpResponse, http } from 'msw';

export const handlers: HttpHandler[] = [
  http.get(new RegExp('^https://dummyjson.com/products(/search)?$'), () => {
    return HttpResponse.json({
      total: 2,
      products: [
        { title: 'Product 1', description: 'Description 1', id: 1 },
        { title: 'Product 2', description: 'Description 2', id: 2 },
      ],
    });
  }),
];
