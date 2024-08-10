import {
  SearchPageParams,
  SearchPageSearchParams,
} from '@app/search/[pageNumber]/types';

export interface DetailsPageSearchParams {
  product?: string;
}

export interface DetailsPageProps {
  params: SearchPageParams;
  searchParams: SearchPageSearchParams & DetailsPageSearchParams;
}
