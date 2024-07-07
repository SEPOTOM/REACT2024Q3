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

  handleSearchQueryUpdate = (newSearchQuery: string): void => {
    this.setState({ searchQuery: newSearchQuery });
  };

  fetchProducts = async (searchQuery: string): Promise<void> => {
    const products = await getProductsBySearchQuery(searchQuery.trim());

    if (this._isMounted && searchQuery === this.state.searchQuery) {
      this.setState({ products });
    }
  };

  render(): ReactNode {
    return (
      <>
        <header className="header">
          <div className="container header__inner">
            <ErrorButton />
            <SearchForm onInputUpdate={this.handleSearchQueryUpdate} />
          </div>
        </header>
        <main className="main">
          <div className="container main__inner">
            {this.state.products && this.state.products.length > 0 && (
              <ProductsList products={this.state.products} />
            )}
            {this.state.products === null && (
              <StatusMessage>Loading...</StatusMessage>
            )}
          </div>
        </main>
      </>
    );
  }

  componentDidMount(): void {
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
