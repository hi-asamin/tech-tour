import { getRepository } from 'typeorm';
import { Book } from '../entity/book';
import { TBookRequestBody } from "src/interface/book";
// import { BookService } from '../service/book-service';
// import { BookRepository } from "../repository/book-repository";

export class BookController {
  // private bookService: BookService;
  // private bookRepository: BookRepository;

  public constructor() {
    // this.bookRepository = new BookRepository();
    // this.bookService = new BookService(this.bookRepository);
  }

  public async findAll() {
    // const result = {
    //   method: 'GET',
    //   message: 'called books get'
    // };
    // const result = this.bookService.findAll();
    const bookRepository = getRepository(Book);
    const result = await bookRepository.find();
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
    // const result = {
    //   ...body,
    // };
    const bookRepository = getRepository(Book);
    const book: Book = new Book();
    console.log(body);
    book.title = body.title;
    const result = await bookRepository.save(book);
    return result;
  }

  public async update(id: number, body: TBookRequestBody) {
    const result = {
      id: id,
      body: body,
    };
    return result;
  }

  public async delete(id: number) {
    const result = {
      method: 'DELETE',
      message: 'called books delete id ' + id,
    };
    return result;
  }
}