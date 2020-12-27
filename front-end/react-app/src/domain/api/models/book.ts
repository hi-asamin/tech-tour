export interface BookRequest {
  title: string;
  author: string;
  image: string;
  genre_id?: number;
  chapters: string[];
  memo: string;
}

export type BookResponse = {
  id: number;
  title: string;
  author: string;
  image: string;
  genre_id: number;
  genre: Genre;
  chapters: Chapter[];
  memo: string;
}

export type Genre = {
  id: number;
  genre: string;
  created_at: string;
  updated_at: string;
}

export type Chapter = {
  id?: number;
  chapter: string;
  created_at?: string;
  updated_at?: string;
}

export type BookIndexState = {
  loading?: boolean;
  books: BookResponse[];
  status?: Status
}

export enum Status {
  default,
  success,
  failed
}

export const initialBookIndexState: BookIndexState = {
  loading: false,
  books: [],
  status: Status.default,
};