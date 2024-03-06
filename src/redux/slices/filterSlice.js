import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterByName: '',
};

const filterSlice = createSlice({
  name: "contacts",
  initialState: filterInitialState,
  reducers: {
    setFilterByName(state, action) {
      state.filterByName = action.payload;
    },
  },
});

export const { setFilterByName } = filterSlice.actions;

export default filterSlice.reducer;
