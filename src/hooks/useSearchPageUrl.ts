import { useSearchParams } from 'next/navigation';

import { useCurrentPage } from '@/hooks';

const useSearchPageUrl = () => {
  const currentPage = useCurrentPage();
  const searchParams = useSearchParams();

  const customSearchParams = new URLSearchParams(searchParams || {});
  customSearchParams.delete('product');
  const queryString = customSearchParams.toString();

  return `/search/${currentPage}${queryString ? `?${queryString}` : ''}`;
};

export default useSearchPageUrl;
