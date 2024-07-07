import { Component, ReactNode } from 'react';

import { ProductsListProps } from '@components/ProductsList/types';

import '@components/ProductsList/ProductsList.css';

class ProductsList extends Component<ProductsListProps> {
  render(): ReactNode {
    return (
      <ul className="products-list">
        {this.props.products.map((product) => (
          <li key={product.id} className="products-list__item">
            <h2 className="products-list__title">{product.title}</h2>
            <p className="products-list__text">{product.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductsList;
