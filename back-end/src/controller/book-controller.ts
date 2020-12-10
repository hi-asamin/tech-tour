import { EntityManager } from 'typeorm';
import { Book } from '../domain/entity/book';
import { TBookRequestBody } from "src/interface/book";
import { BookInteractor } from '../usecase/book-interactor';
import { BookRepository } from '../interface/database/book-repository';

export class BookController {
  private bookInteractor: BookInteractor;

  public constructor(manager: EntityManager) {
    this.bookInteractor = new BookInteractor(
      new BookRepository(manager)
    )
  }

  public async findAll(): Promise<Book[]> {
    const result = await this.bookInteractor.findAll();
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
    const result = await this.bookInteractor.create(body);
    return result;
  }

  public async update(id: number, body: TBookRequestBody) {
    const result = await this.bookInteractor.update(id, body);
    return result;
  }

  public async delete(id: number) {
    await this.bookInteractor.delete(id);
  }
}