import { TBookRequestBody } from '~/src/interface/book';
import { Book } from '../entity/book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;

  sampleCustomRawSelectQuery(id: number): Promise<Book[]>;

  add(item: TBookRequestBody): Promise<Book | undefined>;

  updateBook(id: number, item: TBookRequestBody): Promise<Book | undefined>;

  deleteBook(id: number): Promise<void>;
}