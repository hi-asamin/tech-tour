import { Genre } from '../domain/entity/genre';
import { GenreDTO } from "~/src/interface/dto/genre.dto";
import { IGenreRepository } from '../domain/repository/genre.repository';

export class GenreInteractor {
  private genreRepository: IGenreRepository;

  constructor(genreRepository: IGenreRepository) {
    this.genreRepository = genreRepository;
  }

  public async findAll(): Promise<Genre[]> {
    const result = await this.genreRepository.findAll();
    return result;
  }

  public async findOne(id: number): Promise<Genre | undefined> {
    return await this.genreRepository.findOne(id);
  }

  public async create(body: GenreDTO): Promise<Genre> {
    const genre: Genre = await this.genreRepository.save(body.genre);
    return genre;
  }

  public async update(id: number, body: GenreDTO): Promise<Genre | undefined> {
    // TODO 更新対象が存在しない場合は例外にする？
    const genre: Genre | undefined = await this.genreRepository.update(id, body.genre);
    return genre;
  }

  public async delete(id: number): Promise<void> {
    await this.genreRepository.delete(id);
  }
}