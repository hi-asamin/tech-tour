import { EntityManager } from 'typeorm';
import { Genre } from '../../domain/entity/genre';
import { GenreDTO } from "~/src/interface/dto/genre.dto";
import { GenreInteractor } from '../../usecase/genre.interactor';
import { GenreRepository } from '../database/genre.repository';

export class GenreController {
  private genreInteractor: GenreInteractor;

  public constructor(manager: EntityManager) {
    this.genreInteractor = new GenreInteractor(
      new GenreRepository(manager)
    )
  }

  public async findAll(): Promise<Genre[]> {
    const result = await this.genreInteractor.findAll();
    return result;
  }

  public async findOne(id: number) {
    return await this.genreInteractor.findOne(id);;
  }

  public async create(body: GenreDTO) {
    const result = await this.genreInteractor.create(body);
    return result;
  }

  public async update(id: number, body: GenreDTO) {
    const result = await this.genreInteractor.update(id, body);
    return result;
  }

  public async delete(id: number) {
    await this.genreInteractor.delete(id);
  }
}