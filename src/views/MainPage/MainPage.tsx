import { Component, ReactNode } from 'react';

import { getProductsBySearchQuery } from '@services/api';

import {
  ErrorButton,
  ProductsList,
  SearchForm,
  StatusMessage,
} from '@/components';

import { MainPageState } from '@views/MainPage/types';

import '@views/MainPage/MainPage.css';

class MainPage extends Component {
  state: Readonly<MainPageState> = {
    products: null,
    searchQuery: '',
  };

  private _isMounted = false;

  handleSearchQueryUpdate = (newSearchQuery: string) => {
    this.setState({ searchQuery: newSearchQuery });
  };

  fetchProducts = async (searchQuery: string) => {
    const products = await getProductsBySearchQuery(searchQuery.trim());

    if (this._isMounted && searchQuery === this.state.searchQuery) {
      this.setState({ products });
    }
  };

  render(): ReactNode {
    return (
      <>
        <header>
          <ErrorButton />
          <SearchForm onInputUpdate={this.handleSearchQueryUpdate} />
        </header>
        <main className="main">
          {this.state.products && this.state.products.length > 0 && (
            <ProductsList products={this.state.products} />
          )}
          {this.state.products === null && (
            <StatusMessage>Loading...</StatusMessage>
          )}
        </main>
      </>
    );
  }

  async componentDidMount(): Promise<void> {
    this._isMounted = true;

    this.fetchProducts(this.state.searchQuery);
  }

  async componentDidUpdate(
    _: Readonly<object>,
    prevState: Readonly<MainPageState>,
  ): Promise<void> {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ products: null });
      this.fetchProducts(this.state.searchQuery);
    }
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }
}

export default MainPage;
