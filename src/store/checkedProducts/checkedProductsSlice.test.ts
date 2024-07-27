import { createFakeDetailedProduct } from '@tests/mocks/products';

import { setupStore } from '@store/store';
import {
  productChecked,
  productUnchecked,
} from '@store/checkedProducts/checkedProductsSlice';

test('productChecked action adds the detailed product to the store', () => {
  const fakeDetailedProduct = createFakeDetailedProduct(1);
  const store = setupStore();

  store.dispatch(productChecked(fakeDetailedProduct));

  const checkedProductsState = store.getState().checkedProducts;
  expect(checkedProductsState.entities[fakeDetailedProduct.id]).toEqual(
    fakeDetailedProduct,
  );
  expect(
    checkedProductsState.ids.includes(fakeDetailedProduct.id),
  ).toBeTruthy();
});

test('productUnchecked action removes the detailed product from the store', () => {
  const fakeDetailedProduct = createFakeDetailedProduct(1);
  const store = setupStore();
  store.dispatch(productChecked(fakeDetailedProduct));

  store.dispatch(productUnchecked(fakeDetailedProduct.id));

  const checkedProductsState = store.getState().checkedProducts;
  expect(checkedProductsState.entities[fakeDetailedProduct.id]).toBe(undefined);
  expect(checkedProductsState.ids.includes(fakeDetailedProduct.id)).toBeFalsy();
});
