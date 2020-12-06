import {EntityRepository, Repository} from "typeorm";

import { Book } from '../domain/entity/book';
import { TBookRequestBody } from "../interface/book";

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {
  async findAll(): Promise<Book[]> {
    return this.find();
  }

  async sampleCustomRawSelectQuery(id: number): Promise<Book[]> {
    return this.query(`select * from books where id = ${id}`);
    // return this.query(`select * from books where id = $1`, [id]);
  }

  async add(item: TBookRequestBody): Promise<Book> {
    const book: Book = new Book(item);
    this.save(book);
    return book;
  }

  async updateBook(id: number, item: TBookRequestBody): Promise<Book> {
    const book: Book = new Book(item);
    this.update(id, book);
    return book;
  }

  async deleteBook(id: number): Promise<void> {
    this.delete(id);
  }
}