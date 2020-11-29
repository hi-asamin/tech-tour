import { Connection, getManager } from "typeorm";

import { Book } from '../entity/book';
// import { IBookRepository } from "../interface/database/book-repository";

export class BookRepository {
  findAll() {
    return getManager().getRepository(Book).find();
  }
}