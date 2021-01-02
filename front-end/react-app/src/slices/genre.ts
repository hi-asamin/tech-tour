import { createSlice } from '@reduxjs/toolkit';

import { initialGenreState } from 'domain/api/models/genre';
import { reducers } from 'domain/api/service/genre';

export const GenreSlice = createSlice({
  name: 'api/genre',
  initialState: initialGenreState,
  reducers
})