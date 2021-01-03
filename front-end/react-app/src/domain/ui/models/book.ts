import { BookResponse } from 'domain/api/models/book';

export type BookInfoState = {
  book: BookResponse;
}

export const initialBookInfoState: BookInfoState = {
  book: {} as BookResponse,
};