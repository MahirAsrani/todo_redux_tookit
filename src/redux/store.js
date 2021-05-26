import { configureStore } from '@reduxjs/toolkit';
import listSlice from './slices/listSlice';

export default configureStore({
  reducer: {
    todo: listSlice,
  },
});
