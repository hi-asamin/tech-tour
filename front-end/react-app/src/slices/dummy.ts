import { createSlice } from '@reduxjs/toolkit';

import { initialDummyState } from 'domain/ui/models/dummy';
import { reducers } from 'domain/ui/service/dummy';

export const DummySlice = createSlice({
  name: 'ui/dummy',
  initialState: initialDummyState,
  reducers
})