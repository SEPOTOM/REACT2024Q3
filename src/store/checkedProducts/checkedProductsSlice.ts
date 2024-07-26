import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import { RootState } from '@store/store';

import { DetailedProduct } from '@services/types';

const checkedProductsAdapter = createEntityAdapter<DetailedProduct>();

const checkedProductsSlice = createSlice({
  name: 'checkedProducts',
  initialState: checkedProductsAdapter.getInitialState(),
  reducers: {
    productChecked: (state, action: PayloadAction<DetailedProduct>) => {
      checkedProductsAdapter.addOne(state, action.payload);
    },
  },
});

export const { productChecked } = checkedProductsSlice.actions;

export default checkedProductsSlice.reducer;

export const {
  selectById: selectCheckedProductById,
  selectAll: selectCheckedProducts,
} = checkedProductsAdapter.getSelectors(
  (state: RootState) => state.checkedProducts,
);
