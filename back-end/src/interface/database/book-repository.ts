import { EntityManager, EntityRepository } from "typeorm";

import { Book } from '../../domain/entity/book';
import { Genrue } from '../../domain/entity/genre';
import { Chapter } from '../../domain/entity/chapter';
import { IBookRepository } from "~/src/domain/repository/book-repository";
import { TBookRequestBody } from "../../interface/book";

@EntityRepository()
export class BookRepository implements IBookRepository {

  constructor(private manager: EntityManager) {}

  async findAll(): Promise<Book[]> {
    return await this.manager.find(Book);
  }

  async sampleCustomRawSelectQuery(id: number): Promise<Book[]> {
    return this.manager.query(`select * from books where id = ${id}`);
    // return this.query(`select * from books where id = $1`, [id]);
  }

  async save(item: TBookRequestBody): Promise<Book> {
    const chapters: Chapter[] = item.chapters.map(chapter => {
      return new Chapter(chapter);
    })
    // TODO 存在しないジャンルIDが指定された場合動作する？
    const genre: Genrue = await this.manager.create(Genrue, {
      id: item.genre_id
    })
    const book: Book = new Book(item.title, item.author, item.image, genre, chapters, item.memo);
    book.chapters = chapters;
    await this.manager.save(book);
    return await this.manager.save(book);
  }

  async update(id: number, item: TBookRequestBody): Promise<Book | undefined> {
    const book: Book | undefined = await this.manager.findOne(Book, id);
    if (!book) {
      return;
    }
    console.log(book);
    if (!book.chapters) {
      book.chapters = [];
    }
    for (const chapter of item.chapters) {
      book.chapters.push(await this.manager.create(Chapter, {
        book_id: id,
        chapter
      }))
    }
    const genre: Genrue = await this.manager.create(Genrue, {
      id: item.genre_id
    })
    book.genre = genre;
    return await this.manager.save(book);
  }

  async delete(id: number): Promise<void> {
    await this.manager.delete(Book, id);
  }
}