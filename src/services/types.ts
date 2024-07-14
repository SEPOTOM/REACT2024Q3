export interface SearchProductsResponse {
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
}

export interface DetailedProduct extends Product {
  category: string;
  price: number;
  images: string[];
}
