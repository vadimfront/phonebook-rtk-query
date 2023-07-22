import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filterByName: '',
};

const filterContactsSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContactsByName: {
      reducer(state, action) {
        state.filterByName = action.payload;
      },
      prepare(contactName) {
        return {
          payload: contactName,
        };
      },
    },
  },
});

export const { filterContactsByName } = filterContactsSlice.actions;
export const filterContactsReducer = filterContactsSlice.reducer;
