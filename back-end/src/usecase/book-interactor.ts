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
    const book: Book = await this.bookRepository.save(body);
    return book;
  }

  public async update(id: number, body: TBookRequestBody): Promise<Book | undefined> {
    // TODO 更新対象が存在しない場合は例外にする？
    const book: Book | undefined = await this.bookRepository.update(id, body);
    return book;
  }

  public async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}