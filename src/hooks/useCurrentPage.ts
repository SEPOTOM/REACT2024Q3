import { useRouter } from 'next/router';

import { validatePage } from '@utils/validation';

const useCurrentPage = () => {
  const router = useRouter();

  const { pageNumber } = router.query;
  const currentPage = validatePage(pageNumber);

  return currentPage;
};

export default useCurrentPage;
