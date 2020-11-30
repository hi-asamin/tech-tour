import { getCustomRepository } from 'typeorm';
import { Book } from '../entity/book';
import { TBookRequestBody } from "src/interface/book";
import { BookService } from '../service/book-service';
import { BookRepository } from "../repository/book-repository";

export class BookController {
  // private bookService: BookService;

  // public constructor() {
  //   this.bookService = new BookService(getCustomRepository(BookRepository));
  // }

  public async findAll() {
    const bookService = new BookService(getCustomRepository(BookRepository));
    const result = await bookService.findAll();
    return result;
  }

  public async findOne(id: number) {
    const result = {
      method: 'GET',
      message: 'called books get id ' + id,
    };
    return result;
  }

  public async create(body: TBookRequestBody) {
    const bookService = new BookService(getCustomRepository(BookRepository));
    const result = await bookService.create(body);
    return result;
  }

  public async update(id: number, body: TBookRequestBody) {
    const bookService = new BookService(getCustomRepository(BookRepository));
    const result = await bookService.update(id, body);
    return result;
  }

  public async delete(id: number) {
    const bookService = new BookService(getCustomRepository(BookRepository));
    await bookService.delete(id);
  }
}