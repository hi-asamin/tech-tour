import {EntityRepository, Repository, EntityManager} from "typeorm";

import { Book } from '../../domain/entity/book';
import { IBookRepository } from "~/src/domain/repository/book-repository";
import { TBookRequestBody } from "../../interface/book";

@EntityRepository()
export class BookRepository implements IBookRepository {

  constructor(private manager: EntityManager) {
  }

  async findAll(): Promise<Book[]> {
    return this.manager.find(Book);
  }

  async sampleCustomRawSelectQuery(id: number): Promise<Book[]> {
    return this.manager.query(`select * from books where id = ${id}`);
    // return this.query(`select * from books where id = $1`, [id]);
  }

  async addBook(item: TBookRequestBody): Promise<Book> {
    const book: Book = new Book(item);
    this.manager.save(book);
    return book;
  }

  async updateBook(id: number, item: TBookRequestBody): Promise<Book> {
    const book: Book = new Book(item);
    this.manager.update(Book, id, book);
    return book;
  }

  async deleteBook(id: number): Promise<void> {
    this.manager.delete(Book, id);
  }
}