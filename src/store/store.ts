import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { apiSlice } from '@store/api/apiSlice';
import checkedProductsReducer from '@/store/checkedProducts/checkedProductsSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  checkedProducts: checkedProductsReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    preloadedState,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;

export const wrapper = createWrapper<AppStore>(() => setupStore());
