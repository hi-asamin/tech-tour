export type BookRequestDTO = {
  title: string;
  author: string;
  image: string;
  genre_id: number;
  chapters: Chapter[];
  memo: string;
}

export type Chapter = {
  chapter: string;
}