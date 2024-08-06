import { useRouter } from 'next/router';

import { useCurrentPage } from '@/hooks';

const useCurrentSearchPageUrl = () => {
  const currentPage = useCurrentPage();
  const router = useRouter();

  return `/search/${currentPage}${router.query.q ? `?q=${router.query.q}` : ''}`;
};

export default useCurrentSearchPageUrl;
