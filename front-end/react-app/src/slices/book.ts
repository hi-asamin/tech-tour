import { createSlice } from '@reduxjs/toolkit';

import { initialBookIndexState } from 'domain/api/models/book';
import { reducers } from 'domain/api/service/book';

export const BookSlice = createSlice({
  name: 'api/book',
  initialState: initialBookIndexState,
  reducers
})