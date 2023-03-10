import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from '../features/counter/counterSlice';
import cardReducer from '../features/card/cardReducer';
import { pokemonApi } from '../services/pokemon';

export const store = configureStore({
  reducer: {
    // note reusing the slice.name to use object notation to name our reducer
    [counterSlice.name]: counterReducer,
    card: cardReducer,
    // note using RTKQuery object to fetch defined reducer path to allow use of object noation
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});
