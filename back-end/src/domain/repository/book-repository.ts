import { TBookRequestBody } from '~/src/interface/book';
import { Book } from '../entity/book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;

  findOne(id: number): Promise<Book | undefined>;

  save(item: TBookRequestBody): Promise<Book>;

  update(id: number, item: TBookRequestBody): Promise<Book | undefined>;

  delete(id: number): Promise<void>;
}