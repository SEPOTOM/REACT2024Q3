import { setupStore } from '@store/store';
import { productChecked } from '@store/checkedProducts/checkedProductsSlice';

import { DetailedProduct } from '@services/types';

test('productChecked action adds the product to the store', () => {
  const fakeProduct: DetailedProduct = {
    id: 1,
    title: 'Fake Product 1',
    description: 'Fake Description 1',
    price: 99.99,
    category: 'Fake Category 1',
    images: ['Fake Image URL 1'],
  };
  const store = setupStore();

  store.dispatch(productChecked(fakeProduct));

  const checkedProductsState = store.getState().checkedProducts;
  expect(checkedProductsState.entities[fakeProduct.id]).toEqual(fakeProduct);
  expect(checkedProductsState.ids.includes(fakeProduct.id)).toBeTruthy();
});
