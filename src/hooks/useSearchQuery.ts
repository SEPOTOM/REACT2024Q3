import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import { useEffect, useState } from 'react';

const useSearchQuery = (): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
] => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery) {
      setSearchQuery(initialSearchQuery);
    }
  }, []);

  useEffect(() => {
    saveSearchQuery(searchQuery);
  }, [searchQuery]);

  return [searchQuery, setSearchQuery];
};

export default useSearchQuery;
