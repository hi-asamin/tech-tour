import { EntityManager, EntityRepository } from "typeorm";

import { Chapter } from '../../domain/entity/chapter';

@EntityRepository()
export class BookRepository {

  constructor(private manager: EntityManager) {};

  async findAll(): Promise<Chapter[]> {
    return await this.manager.find(Chapter);
  }

  async findByBookId(bookId: number): Promise<Chapter[] | undefined> {
    return await this.manager.find(Chapter, { where: { book_id: bookId } });
  }

  async deleteByBookId(bookId: number): Promise<void> {
    const chapters: Chapter[] | undefined = await this.findByBookId(bookId);
    if (!chapters) return;
    await this.manager.remove(chapters);
  }
}