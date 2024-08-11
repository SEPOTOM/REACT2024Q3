export interface SearchPageParams {
  pageNumber: string;
}

export interface SearchPageSearchParams {
  q?: string;
}

export interface SearchPageProps {
  params: SearchPageParams;
  searchParams: SearchPageSearchParams;
}
