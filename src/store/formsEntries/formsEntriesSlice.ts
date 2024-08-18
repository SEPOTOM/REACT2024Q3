import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '@store/store';

import { FormEntry, FromEntriesState } from '@store/formsEntries/types';

const initialState: FromEntriesState = {
  controlledFormEntries: [],
  uncontrolledFormEntries: [],
};

const formsEntriesSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {
    addControlledFormEntry: (state, action: PayloadAction<FormEntry>) => {
      state.controlledFormEntries.unshift(action.payload);
    },
    addUncontrolledFormEntry: (state, action: PayloadAction<FormEntry>) => {
      state.uncontrolledFormEntries.unshift(action.payload);
    },
    markEntriesAsOld: (state) => {
      state.controlledFormEntries.forEach((entry) => (entry.isNew = false));
      state.uncontrolledFormEntries.forEach((entry) => (entry.isNew = false));
    },
  },
});

export default formsEntriesSlice.reducer;

export const {
  addControlledFormEntry,
  addUncontrolledFormEntry,
  markEntriesAsOld,
} = formsEntriesSlice.actions;

export const selectControlledFormEntries = (state: RootState) =>
  state.formsEntries.controlledFormEntries;
export const selectUncontrolledFormEntries = (state: RootState) =>
  state.formsEntries.uncontrolledFormEntries;
