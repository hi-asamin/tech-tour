import { EntityManager, EntityRepository } from "typeorm";

import { Book } from '../../domain/entity/book';
import { Genre } from '../../domain/entity/genre';
import { Chapter } from '../../domain/entity/chapter';
import { IBookRepository } from "~/src/domain/repository/book-repository";
import { BookRequestDTO } from "../dto/book.dto";

@EntityRepository()
export class BookRepository implements IBookRepository {

  constructor(private manager: EntityManager) {};

  async findAll(): Promise<Book[]> {
    return await this.manager.find(Book);
  }

  async findOne(id: number): Promise<Book | undefined> {
    return await this.manager.findOne(Book, id);
  }

  async save(item: BookRequestDTO): Promise<Book> {
    const chapters: Chapter[] = item.chapters.map(chapter => {
      return new Chapter(chapter);
    })
    // TODO 存在しないジャンルIDが指定された場合動作する？
    const genre: Genre = await this.manager.create(Genre, {
      id: item.genre_id
    })
    const book: Book = new Book(item.title, item.author, item.image, genre, chapters, item.memo);
    book.chapters = chapters;
    return await this.manager.save(book);
  }

  async update(id: number, item: BookRequestDTO): Promise<Book | undefined> {
    // 一旦更新前の目次を全削除
    return await this.manager.transaction(async transactionalEntityManager => {
      const preChapters: Chapter[] | undefined = await transactionalEntityManager.find(Chapter, { where: { book_id: id } });
      if (preChapters) {
        await transactionalEntityManager.remove(preChapters);
      }
      // 更新後の目次を作成
      const chapters: Chapter[] = item.chapters.map(chapter => {
        return new Chapter(chapter);
      })
      const genre: Genre = await transactionalEntityManager.create(Genre, {
        id: item.genre_id
      })
      const book: Book = await transactionalEntityManager.create(Book, {
        id,
        title: item.title,
        author: item.author,
        image: item.image,
        genre,
        chapters,
        memo: item.memo
      })
      return await transactionalEntityManager.save(book);
    })
  }

  async delete(id: number): Promise<void> {
    await this.manager.delete(Book, id);
  }
}