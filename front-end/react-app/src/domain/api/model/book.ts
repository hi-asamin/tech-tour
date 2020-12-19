export type Book = {
  title: string;
  author: string;
  image: string;
  genre_id: number;
  chapters: string[];
  memo: string;
}

export type BookIndexState = {
  loading: boolean;
  books: Book[];
  status: Status
}

export enum Status {
  default,
  success,
  failed
}

export const initialDummyState: BookIndexState = {
  loading: false,
  books: [],
  status: Status.default,
};