import { PayloadAction } from '@reduxjs/toolkit';

import { BookResponse } from 'domain/api/models/book';
import { BookInfoState } from 'domain/ui/models/book';

export const reducers = {
  updateBookInfoStateAction: (state: BookInfoState, action: PayloadAction<BookInfoState>) => ({
    ...state,
    book: action.payload.book,
  }),
  clearBookInfoStateAction: (state: BookInfoState): BookInfoState => ({
    ...state,
    book: {} as BookResponse,
  }),
};