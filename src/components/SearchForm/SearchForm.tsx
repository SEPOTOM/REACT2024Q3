import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { SearchFormProps } from '@components/SearchForm/types';

import styles from '@components/SearchForm/SearchForm.module.css';

const SearchForm = ({ initialSearchQuery, onFormSubmit }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const navigate = useNavigate();

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputRef.current) {
      onFormSubmit(inputRef.current.value);
      navigate('/search/1');
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
