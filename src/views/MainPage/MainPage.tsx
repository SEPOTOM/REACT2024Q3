import { Component, ReactNode } from 'react';

import { getProductsBySearchQuery } from '@services/api';

import { MainPageState } from '@views/MainPage/types';

import '@views/MainPage/MainPage.css';

class MainPage extends Component {
  state: Readonly<MainPageState> = {
    products: null,
  };

  private _isMounted = false;

  render(): ReactNode {
    return (
      <>
        <header></header>
        <main className="main"></main>
      </>
    );
  }

  async componentDidMount(): Promise<void> {
    this._isMounted = true;

    const products = await getProductsBySearchQuery('');

    if (this._isMounted) {
      this.setState({ products });
    }
  }

  componentWillUnmount(): void {
    this._isMounted = false;
  }
}

export default MainPage;
