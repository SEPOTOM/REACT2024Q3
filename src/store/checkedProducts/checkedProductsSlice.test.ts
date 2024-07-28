import { createFakeDetailedProduct } from '@tests/mocks/products';

import { RootState, setupStore } from '@store/store';
import {
  checkedProductsDeleted,
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

test('checkedProductsDeleted action removes all detailed products from the store', () => {
  const initialState: Partial<RootState> = {
    checkedProducts: {
      ids: [1, 2],
      entities: {
        1: createFakeDetailedProduct(1),
        2: createFakeDetailedProduct(2),
      },
    },
  };
  const store = setupStore(initialState);

  store.dispatch(checkedProductsDeleted());

  const checkedProductsState = store.getState().checkedProducts;
  expect(checkedProductsState.ids.length).toBe(0);
  expect(checkedProductsState.entities[1]).toBe(undefined);
  expect(checkedProductsState.entities[2]).toBe(undefined);
});
