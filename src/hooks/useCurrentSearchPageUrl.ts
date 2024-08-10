import { useSearchParams } from 'next/navigation';

import { useCurrentPage } from '@/hooks';

const useCurrentSearchPageUrl = () => {
  const currentPage = useCurrentPage();
  const searchParams = useSearchParams();

  const queryString = searchParams?.toString();

  return `/search/${currentPage}${queryString ? `?${queryString}` : ''}`;
};

export default useCurrentSearchPageUrl;
