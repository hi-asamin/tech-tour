export type TBookRequestBody = {
  title: string;
  author: string;
  image: string;
  genre_id: number;
  chapters: string[];
  memo: string;
}