import { createSlice } from '@reduxjs/toolkit';

import { initialDummyState } from 'model/dummy';
import { reducers } from 'reducer/dummy';

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState: initialDummyState,
  reducers
})