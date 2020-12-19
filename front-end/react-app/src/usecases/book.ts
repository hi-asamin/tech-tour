import { findAll } from 'domain/api/service/book';

export const getBookList = async () => {
  const books = await findAll();
}