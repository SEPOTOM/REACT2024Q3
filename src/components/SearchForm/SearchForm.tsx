import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useTheme } from '@/contexts';

import { SearchFormProps } from '@components/SearchForm/types';

import '@components/SearchForm/SearchForm.css';

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
      className={`search-form search-form_theme_${theme}`}
    >
      <input
        type="search"
        defaultValue={initialSearchQuery}
        ref={inputRef}
        className="search-form__input"
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
