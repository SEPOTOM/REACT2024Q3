import { Component, ReactNode } from 'react';

import { getProductsBySearchQuery } from '@services/api';

import { SearchForm } from '@/components';

import { MainPageState } from '@views/MainPage/types';

import '@views/MainPage/MainPage.css';

class MainPage extends Component {
  state: Readonly<MainPageState> = {
    products: null,
    searchQuery: '',
  };

  private _isMounted = false;

  handleSearchFormSubmit = (newSearchQuery: string) => {
    this.setState({ searchQuery: newSearchQuery });
  };

  render(): ReactNode {
    return (
      <>
        <header>
          <SearchForm onSubmit={this.handleSearchFormSubmit} />
        </header>
        <main className="main"></main>
      </>
    );
  }

  async componentDidMount(): Promise<void> {
    this._isMounted = true;

    const products = await getProductsBySearchQuery(this.state.searchQuery);

    if (this._isMounted) {
      this.setState({ products });
    }
  }

  async componentDidUpdate(
    _: Readonly<object>,
    prevState: Readonly<MainPageState>,
  ): Promise<void> {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const products = await getProductsBySearchQuery(this.state.searchQuery);

      if (this._isMounted) {
        this.setState({ products });
      }
    }
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }
}

export default MainPage;
