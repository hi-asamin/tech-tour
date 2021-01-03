import { PayloadAction } from '@reduxjs/toolkit';

import { SearchState } from 'domain/ui/models/search';

export const reducers = {
  updateSearchStateAction: (state: SearchState, action: PayloadAction<SearchState>) => ({
    ...state,
    key: action.payload.key,
    value: action.payload.value,
  }),
  clearSearchStateAction: (state: SearchState): SearchState => ({
    ...state,
    key: undefined,
    value: undefined,
  }),
};