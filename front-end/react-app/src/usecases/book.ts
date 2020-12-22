import { dispatch } from 'store';
import { findAll } from 'domain/api/service/book';
import { BookAction } from 'actions/book';

export const getBookList = async () => {
  dispatch(BookAction.fetchBookIndexStateAction());
  try {
    const books = await findAll();
    dispatch(BookAction.updateBookIndexStateAction({ books }));
  } catch (e) {
    dispatch(BookAction.failedBookIndexStateAction());
  }
}