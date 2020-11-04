import { createSlice } from '@reduxjs/toolkit';

import { initialDummyState } from 'models/dummy';
import { reducers } from 'reducers/dummy';

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState: initialDummyState,
  reducers
})