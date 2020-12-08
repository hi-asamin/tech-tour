import { Book } from '../domain/entity/book';
import { TBookRequestBody } from "src/interface/book";
import { IBookRepository } from '../domain/repository/book-repository';

export class BookInteractor {
  private bookRepository: IBookRepository;

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository;
  }

  public async findAll(): Promise<Book[]> {
    const result = await this.bookRepository.findAll();
    return result;
  }

  public async create(body: TBookRequestBody): Promise<Book> {
    const book: Book = await this.bookRepository.addBook(body);
    return book;
  }

  public async update(id: number, body: TBookRequestBody): Promise<Book> {
    const book: Book = await this.bookRepository.updateBook(id, body);
    return book;
  }

  public async delete(id: number): Promise<void> {
    await this.bookRepository.deleteBook(id);
  }
}