import { ChangeEvent, Component, FormEvent, ReactNode } from 'react';

import { SearchFormState } from '@components/SearchForm/types';

import '@components/SearchForm/SearchForm.css';

class SearchForm extends Component {
  state: Readonly<SearchFormState> = {
    inputValue: '',
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  render(): ReactNode {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="search"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;
