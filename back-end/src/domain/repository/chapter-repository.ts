import { Chapter } from '../entity/chapter';

export interface IBookRepository {
  findAll(): Promise<Chapter[]>;

  findByBookId(bookId: number): Promise<Chapter[] | undefined>;

  deleteByBookId(bookId: number): Promise<void>;
}