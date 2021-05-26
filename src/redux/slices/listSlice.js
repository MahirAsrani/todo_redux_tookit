import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    list: [],
  },
  reducers: {
    addList: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    rmvList: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addList, rmvList } = listSlice.actions;

export default listSlice.reducer;
