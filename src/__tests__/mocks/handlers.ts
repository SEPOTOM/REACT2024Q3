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
  http.get('https://dummyjson.com/products/:productId', ({ params }) => {
    const { productId } = params;

    return HttpResponse.json({
      title: `Detailed Product ${productId}`,
      description: `Detailed Description ${productId}`,
      category: `Detailed Category ${productId}`,
      price: 9.99,
      images: [`Detailed Image ${productId}`],
      id: productId,
    });
  }),
];
