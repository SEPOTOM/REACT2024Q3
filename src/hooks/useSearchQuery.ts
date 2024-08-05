import { useRouter } from 'next/router';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { useEffect } from 'react';

const useSearchQuery = (): string => {
  const router = useRouter();
  const searchQuery = router.query.q ? String(router.query.q) : '';

  useEffect(() => {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery && router.query.q === '') {
      router.replace(`/search/1?q=${initialSearchQuery}`);
    }
  }, [router]);

  useEffect(() => {
    saveSearchQuery(searchQuery);
  }, [searchQuery]);

  return searchQuery;
};

export default useSearchQuery;
