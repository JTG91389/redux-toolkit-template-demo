import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cardReducer from '../features/card/cardReducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    card: cardReducer
  },
});
