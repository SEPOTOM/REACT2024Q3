import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

import { SearchFormProps, SearchFormState } from '@components/SearchForm/types';

import { getSearchQuery, saveSearchQuery } from '@utils/localStorage';

import '@components/SearchForm/SearchForm.css';

class SearchForm extends Component<SearchFormProps> {
  state: Readonly<SearchFormState> = {
    inputValue: '',
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onInputUpdate(this.state.inputValue);
    saveSearchQuery(this.state.inputValue);
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleFormSubmit} className="search-form">
        <input
          type="search"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          className="search-form__input"
        />
        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    );
  }

  componentDidMount(): void {
    const initialSearchQuery = getSearchQuery();

    if (initialSearchQuery) {
      this.props.onInputUpdate(initialSearchQuery);
      this.setState({ inputValue: initialSearchQuery });
    }
  }
}

export default SearchForm;
