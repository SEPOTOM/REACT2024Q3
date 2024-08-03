import { FormEvent, useRef } from 'react';
import { useRouter } from 'next/router';

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
      onFormSubmit(inputRef.current.value);
      router.push('/search/1');
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
