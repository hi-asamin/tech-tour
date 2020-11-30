import { Book } from '../entity/book';
import { TBookRequestBody } from "src/interface/book";
import { BookRepository } from "../repository/book-repository";

export class BookService {
  private bookRepository: BookRepository;

  public constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  public async findAll(): Promise<Book[]> {
    const result = await this.bookRepository.findAll();
    return result;
  }

  public async create(body: TBookRequestBody): Promise<Book> {
    const book: Book = await this.bookRepository.add(body);
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