import {EntityRepository, Repository, EntityManager} from "typeorm";

import { Book } from '../../domain/entity/book';
import { Genrue } from '../../domain/entity/genre';
import { Chapter } from '../../domain/entity/chapter';
import { IBookRepository } from "~/src/domain/repository/book-repository";
import { TBookRequestBody } from "../../interface/book";

@EntityRepository()
export class BookRepository implements IBookRepository {

  constructor(private manager: EntityManager) {}

  // async findAll(): Promise<Book[]> {
  //   return await this.manager.find(Book, { relations: ['m_genre', 't_chapter'] });
  // }

  async findAll(): Promise<Book[]> {
    return await this.manager.getRepository(Book)
            .createQueryBuilder('m_book')
            .leftJoinAndSelect('m_book.chapters', 't_chapter')
            .leftJoinAndSelect('m_book.genre', 'm_genre')
            .getMany();
  }

  async sampleCustomRawSelectQuery(id: number): Promise<Book[]> {
    return this.manager.query(`select * from books where id = ${id}`);
    // return this.query(`select * from books where id = $1`, [id]);
  }

  async addBook(item: TBookRequestBody): Promise<Book> {
    const chapters: Chapter[] = item.chapters.map(chapter => {
      return new Chapter(chapter);
    })
    const genre: Genrue = new Genrue();
    genre.id = item.genre_id;
    const book: Book = new Book(item.title, item.author, item.image, genre, chapters, item.memo);
    book.chapters = chapters;
    await this.manager.save(book);
    return book;
  }

  async updateBook(id: number, item: TBookRequestBody): Promise<Book> {
    const preChapters: Chapter[] = await this.manager.find(Chapter, { where: { book_id: id } });
    this.manager.remove(Chapter, preChapters);
    const chapters: Chapter[] = item.chapters.map(chapter => {
      return new Chapter(chapter);
    })
    const genre: Genrue = new Genrue();
    genre.id = item.genre_id;
    const book: Book = new Book(item.title, item.author, item.image, genre, chapters, item.memo);
    book.id = id;
    this.manager.save(book);
    return book;
  }

  async deleteBook(id: number): Promise<void> {
    this.manager.delete(Book, id);
  }
}