import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { SearchFormProps } from '@components/SearchForm/types';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import '@components/SearchForm/SearchForm.css';

const SearchForm = ({ onInputUpdate }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery) {
      onInputUpdate(initialSearchQuery);
      setInputValue(initialSearchQuery);
    }
  }, [onInputUpdate]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    onInputUpdate(inputValue);
    saveSearchQuery(inputValue);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <input
        type="search"
        value={inputValue}
        onChange={handleInputChange}
        className="search-form__input"
      />
      <button type="submit" className="search-form__button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
