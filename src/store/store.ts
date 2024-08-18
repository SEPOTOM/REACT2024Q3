import { configureStore } from '@reduxjs/toolkit';

import countriesReducer from '@store/countries/countriesSlice';
import formsEntriesReducer from '@store/formsEntries/formsEntriesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    formsEntries: formsEntriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
