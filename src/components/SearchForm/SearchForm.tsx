import { FormEvent, useRef } from 'react';

import { SearchFormProps } from '@components/SearchForm/types';

import '@components/SearchForm/SearchForm.css';

const SearchForm = ({ initialSearchQuery, onFormSubmit }: SearchFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputRef.current) {
      onFormSubmit(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
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
