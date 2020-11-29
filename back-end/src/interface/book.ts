import { IRequestBody } from 'src/interface/index';

export type TBookRequestBody = IRequestBody<Book>;

export interface Book {
  title: string;
  image: string;
  genre_id: number;
  chapters: string[];
  memo: string;
}