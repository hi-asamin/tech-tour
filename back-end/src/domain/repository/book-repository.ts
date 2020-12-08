import { TBookRequestBody } from '~/src/interface/book';
import { Book } from '../entity/book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;

  sampleCustomRawSelectQuery(id: number): Promise<Book[]>;

  addBook(item: TBookRequestBody): Promise<Book>;

  updateBook(id: number, item: TBookRequestBody): Promise<Book>;

  deleteBook(id: number): Promise<void>;
}