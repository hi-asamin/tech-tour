export type BookRequest = {
  title: string;
  author: string;
  image: string;
  genre_id: number;
  chapters: string[];
  memo: string;
}

export type BookResponse = {
  title: string;
  author: string;
  image: string;
  genre: string;
  chapters: string[];
  memo: string;
}

export type BookIndexState = {
  loading: boolean;
  books: BookResponse[];
  status: Status
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