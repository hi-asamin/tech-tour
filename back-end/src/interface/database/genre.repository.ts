import { EntityManager, EntityRepository } from "typeorm";

import { Genre } from '../../domain/entity/genre';
import { IGenreRepository } from "~/src/domain/repository/genre.repository";

@EntityRepository()
export class GenreRepository implements IGenreRepository {

  constructor(private manager: EntityManager) {};

  async findAll(): Promise<Genre[]> {
    return await this.manager.find(Genre);
  }

  async findOne(id: number): Promise<Genre | undefined> {
    return await this.manager.findOne(Genre, id);
  }

  async save(genre: string): Promise<Genre> {
    const newGenre: Genre = await this.manager.create(Genre, { genre });
    return await this.manager.save(newGenre);
  }

  async update(id: number, genre: string): Promise<Genre | undefined> {
    const updateGenre: Genre | undefined = await this.manager.findOne(Genre, { id });
    if (!updateGenre) return;
    updateGenre.genre = genre;
    return await this.manager.save(Genre, updateGenre);
  }

  async delete(id: number): Promise<void> {
    await this.manager.delete(Genre, id);
  }
}