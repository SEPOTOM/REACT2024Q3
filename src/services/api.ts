import { Product, SearchProductsResponse } from '@services/types';

const PRODUCTS_LIMIT = 10;

export const getProductsBySearchQuery = async (
  searchQuery: string,
  page = 1,
): Promise<Product[]> => {
  const url = new URL('https://dummyjson.com/products');
  const searchParams = new URLSearchParams({
    limit: String(PRODUCTS_LIMIT),
    select: 'title,description',
    skip: String((page - 1) * PRODUCTS_LIMIT),
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
