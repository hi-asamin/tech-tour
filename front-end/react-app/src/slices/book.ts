import { createSlice } from '@reduxjs/toolkit';

import { initialBookIndexState } from 'domain/api/models/book';
import { reducers } from 'domain/api/service/book';
import { initialBookInfoState } from 'domain/ui/models/book';
import { reducers as UIreducers } from 'domain/ui/service/book';

export const BookSlice = createSlice({
  name: 'api/book',
  initialState: initialBookIndexState,
  reducers
});

export const UIBookSlice = createSlice({
  name: 'ui/book',
  initialState: initialBookInfoState,
  reducers: UIreducers,
})