import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { DummySlice } from 'slices/dummy';
import { BookSlice } from 'slices/book';
import { GenreSlice } from 'slices/genre';
import { SearchSlice } from 'slices/search';

const appReducer = combineReducers({
  [DummySlice.name]: DummySlice.reducer,
  [BookSlice.name]: BookSlice.reducer,
  [GenreSlice.name]: GenreSlice.reducer,
  [SearchSlice.name]: SearchSlice.reducer,
});

const store = configureStore({
  reducer: appReducer,
});

const dispatch = store.dispatch;
export type StateType = typeof store.getState;
export { store, dispatch };