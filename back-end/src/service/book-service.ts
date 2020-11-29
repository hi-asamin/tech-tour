// import { IBookRepository } from 'src/interface/database/book-repository';
import { BookRepository } from 'src/repository/book-repository';

export class BookService {
  private bookRepository: BookRepository;

  public constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  public findAll() {
    const result = this.bookRepository.findAll();
    return result;
  }

  // public create() {
  //   this.bookRepository.addBook();
  // }
}