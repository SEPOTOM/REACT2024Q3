import { useRouter } from 'next/router';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { useEffect, useState } from 'react';

const useSearchQuery = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);

      if (router.query.q !== initialSearchQuery) {
        router.replace(`/search/1?q=${initialSearchQuery}`);
      }
    }
  }, [router]);

  useEffect(() => {
    saveSearchQuery(searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};

export default useSearchQuery;
