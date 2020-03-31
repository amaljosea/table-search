import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/SearchTable/searchSlice';


export default configureStore({
  reducer: {
    search: searchReducer
  },
});
