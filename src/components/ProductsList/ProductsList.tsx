import { Component, ReactNode } from 'react';

import { ProductsListProps } from '@components/ProductsList/types';

import '@components/ProductsList/ProductsList.css';

class ProductsList extends Component<ProductsListProps> {
  render(): ReactNode {
    return (
      <ul>
        {this.props.products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductsList;
