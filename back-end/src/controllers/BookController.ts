import { BookRequestBody } from "../interfaces/book";

export class BookController {
  public async findAll() {
    const result = {
      method: 'GET',
      message: 'called books get'
    };
    return result;
  }

  public async findOne(id: number) {
    const result = {
      method: 'GET',
      message: 'called books get id ' + id,
    };
    return result;
  }

  public async create(body: BookRequestBody) {
    const result = {
      ...body,
    };
    return result;
  }

  public async update(id: number, body: BookRequestBody) {
    const result = {
      id: id,
      body: body,
    };
    return result;
  }

  public async delete(id: number) {
    const result = {
      method: 'DELETE',
      message: 'called books delete id ' + id,
    };
    return result;
  }
}