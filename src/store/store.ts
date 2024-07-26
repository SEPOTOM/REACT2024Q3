import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '@store/api/apiSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
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
