import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import { NextParsedUrlQuery } from 'next/dist/server/request-meta';

import { useTheme } from '@/contexts';

import { SearchFormProps } from '@components/SearchForm/types';

import styles from '@components/SearchForm/SearchForm.module.css';

const SearchForm = ({ initialSearchQuery, onFormSubmit }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const router = useRouter();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputRef.current) {
      const newSearchQuery = inputRef.current.value;
      const query: NextParsedUrlQuery = {};

      if (newSearchQuery) {
        query.q = newSearchQuery;
      }

      onFormSubmit(newSearchQuery);
      router.push({
        pathname: '/search/1',
        query,
      });
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className={`${styles.searchForm} ${styles[`searchForm_theme_${theme}`]}`}
    >
      <input
        type="search"
        defaultValue={initialSearchQuery}
        ref={inputRef}
        className={styles.searchFormInput}
      />
      <button type="submit" className={styles.searchFormButton}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
