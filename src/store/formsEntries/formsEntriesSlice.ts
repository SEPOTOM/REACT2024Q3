import { PayloadAction, createSlice } from '@reduxjs/toolkit';

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
      state.controlledFormEntries.push(action.payload);
    },
  },
});

export default formsEntriesSlice.reducer;

export const { addControlledFormEntry } = formsEntriesSlice.actions;
