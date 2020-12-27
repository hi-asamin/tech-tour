import { dispatch } from 'store';
import { BookRequest, BookResponse } from 'domain/api/models/book';
import { findAll, create } from 'domain/api/service/book';
import { BookAction } from 'actions/book';

export const getBookList = async () => {
  dispatch(BookAction.fetchBookIndexStateAction());
  try {
    const books: BookResponse[] = await findAll();
    dispatch(BookAction.updateBookIndexStateAction({ books }));
  } catch (e) {
    dispatch(BookAction.failedBookIndexStateAction());
  }
}

export const postBook = async (book: BookRequest) => {
  try {
    await create(book);
  } catch (e) {
    console.error(e);
  }
}