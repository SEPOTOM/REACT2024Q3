import { useRouter, useSearchParams } from 'next/navigation';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { useEffect, useState } from 'react';

const useSearchQuery = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);

      if (searchParams?.get('q') !== initialSearchQuery) {
        router.replace(`/search/1?q=${initialSearchQuery}`);
      }
    }
  }, [router, searchParams]);

  useEffect(() => {
    saveSearchQuery(searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};

export default useSearchQuery;
