import { RequestBody } from './index';

export type BookRequestBody = RequestBody<Book>;

export interface Book {
  title: string;
  image: string;
  genre_id: number;
  chapters: string[];
  memo: string;
}