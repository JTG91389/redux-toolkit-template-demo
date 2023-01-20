import {
  createAction,
  createReducer,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { fetchCard } from './cardAPI';

// export actions from module
export const show = createAsyncThunk('card/show', async () => {
  const response = await fetchCard();
  return response.data;
});
export const clear = createAction('card/clear');

// constants for asyncThunk
export const _idle = 'idle';
export const _loading = 'loading';

const initialState = {
  status: _idle,
};

export const selectCard = (state) => state.card;

// default export of reducer
export default createReducer(initialState, (builder) => {
  builder
    .addCase(clear, () => initialState)
    .addCase(show.pending, (state, action) => {
      // show loading state on card
      state.status = _loading;
    })
    .addCase(show.fulfilled, (state, action) => {
      /**
       * this syntax is direct state mutation, we are not actually mutating this state,
       * Redux toolkit uses a library called immer that creates an intermediate state
       * object for easier updates. Typically we'd be creating an entirely new object
       * and returning it from our reducer and not just making edits to existing state.
       *  */
      // show no loading state on card and show new card details
      state.status = _idle;
      state.title = action.payload.title;
      state.message = action.payload.message;
    });
});
