import { useParams } from 'next/navigation';

import { validatePage } from '@utils/validation';

const useCurrentPage = () => {
  const params = useParams();

  const { pageNumber } = params || {};
  const currentPage = validatePage(pageNumber);

  return currentPage;
};

export default useCurrentPage;
