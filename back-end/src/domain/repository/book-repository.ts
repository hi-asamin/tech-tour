import { BookRequestDTO } from '~/src/interface/dto/book.dto';
import { Book } from '../entity/book';

export interface IBookRepository {
  findAll(): Promise<Book[]>;

  findOne(id: number): Promise<Book | undefined>;

  save(item: BookRequestDTO): Promise<Book>;

  update(id: number, item: BookRequestDTO): Promise<Book | undefined>;

  delete(id: number): Promise<void>;
}