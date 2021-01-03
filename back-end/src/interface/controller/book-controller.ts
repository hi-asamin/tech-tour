import { EntityManager } from 'typeorm';
import { Book } from '../../domain/entity/book';
import { BookRequestDTO, SearchOption } from "~/src/interface/dto/book.dto";
import { BookInteractor } from '../../usecase/book-interactor';
import { BookRepository } from '../database/book-repository';

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
    return this.bookInteractor.findOne(id);
  }

  public async search(option: SearchOption) {
    return await this.bookInteractor.search(option);
  }

  public async create(body: BookRequestDTO) {
    try {
      const result = await this.bookInteractor.create(body);
      return result;
    } catch (e) {
      throw new Error(e);
    }
  }

  public async update(id: number, body: BookRequestDTO) {
    const result = await this.bookInteractor.update(id, body);
    return result;
  }

  public async delete(id: number) {
    await this.bookInteractor.delete(id);
  }
}