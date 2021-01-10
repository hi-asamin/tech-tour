import { createSlice } from '@reduxjs/toolkit';

import { initialSearchState} from 'domain/ui/models/search';
import { reducers } from 'domain/ui/service/search';

export const SearchSlice = createSlice({
  name: 'ui/search',
  initialState: initialSearchState,
  reducers
})