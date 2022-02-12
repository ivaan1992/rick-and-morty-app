import { configureStore } from '@reduxjs/toolkit';
import CharsReducer from './charactersSlice';

export default configureStore({
  reducer: {
    CharsReducer,
  },
});
