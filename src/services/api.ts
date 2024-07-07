import { Product, SearchProductsResponse } from '@services/types';

export const getProductsBySearchQuery = async (
  searchQuery: string,
): Promise<Product[]> => {
  const url = new URL('https://dummyjson.com/products');
  const searchParams = new URLSearchParams({
    limit: '10',
    select: 'title,description',
  });

  if (searchQuery) {
    url.pathname += '/search';
    searchParams.append('q', searchQuery);
  }

  url.search = searchParams.toString();

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Network error! status: ${response.status}, message: ${response.statusText}`,
    );
  }

  const data: SearchProductsResponse = await response.json();
  return data.products;
};
