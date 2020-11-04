import { DummySlice } from 'slices/dummy';

import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

const appReducer = combineReducers({
  [DummySlice.name]: DummySlice.reducer,
});

const store = configureStore({
  reducer: appReducer,
});

const dispatch = store.dispatch;
export type StateType = typeof store.getState;
export { store, dispatch };