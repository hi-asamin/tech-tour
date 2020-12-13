import { Genre } from '../entity/genre';

export interface IGenreRepository {
  findAll(): Promise<Genre[]>;

  findOne(id: number): Promise<Genre | undefined>;

  save(genre: string): Promise<Genre>;

  update(id: number, genre: string): Promise<Genre | undefined>;

  delete(id: number): Promise<void>;
}