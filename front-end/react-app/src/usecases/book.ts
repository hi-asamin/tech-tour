import { dispatch } from 'store';
import { BookRequest, BookResponse } from 'domain/api/models/book';
import { SearchState } from 'domain/ui/models/search';
import { findAll, search, create } from 'domain/api/service/book';
import { BookAction } from 'actions/book';

export const getBookList = async (searchState: SearchState) => {
  dispatch(BookAction.fetchBookIndexStateAction());
  try {
    let books: BookResponse[] = [];
    if (searchState.key && searchState.value) {
      books = await search(searchState)
    } else {
      books = await findAll();
    }
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