export type SearchState = {
  key?: SearchKey;
  value?: string | number;
};

export enum SearchKey {
  genre = 'genre',
  keyword = 'keyword',
}

export const initialSearchState: SearchState = {
};