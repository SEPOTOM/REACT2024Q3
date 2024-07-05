export interface SearchProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
}
