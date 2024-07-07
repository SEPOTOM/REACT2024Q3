import { Component, ReactNode } from 'react';

import { getProductsBySearchQuery } from '@services/api';

import { ProductsList, SearchForm } from '@/components';

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

  fetchProducts = async () => {
    const products = await getProductsBySearchQuery(
      this.state.searchQuery.trim(),
    );

    if (this._isMounted) {
      this.setState({ products });
    }
  };

  render(): ReactNode {
    return (
      <>
        <header>
          <SearchForm onSubmit={this.handleSearchFormSubmit} />
        </header>
        <main className="main">
          {this.state.products && this.state.products.length > 0 && (
            <ProductsList products={this.state.products} />
          )}
        </main>
      </>
    );
  }

  async componentDidMount(): Promise<void> {
    this._isMounted = true;

    this.fetchProducts();
  }

  async componentDidUpdate(
    _: Readonly<object>,
    prevState: Readonly<MainPageState>,
  ): Promise<void> {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ products: null });
      this.fetchProducts();
    }
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }
}

export default MainPage;
