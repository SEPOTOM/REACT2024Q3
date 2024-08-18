import { createSlice } from '@reduxjs/toolkit';

import { FromEntriesState } from '@store/formsEntries/types';

const initialState: FromEntriesState = {
  controlledFormEntries: [],
  uncontrolledFormEntries: [],
};

const formsEntriesSlice = createSlice({
  name: 'controlledForm',
  initialState,
  reducers: {},
});

export default formsEntriesSlice.reducer;
