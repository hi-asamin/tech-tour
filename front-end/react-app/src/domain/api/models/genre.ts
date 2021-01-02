export type Genre = {
  id: number;
  genre: string;
  created_at: string;
  updated_at: string;
}

export type GenreState = {
  loading?: boolean;
  genres: Genre[];
  status?: Status
}

export enum Status {
  default,
  success,
  failed
}

export const initialGenreState: GenreState = {
  loading: false,
  genres: [],
  status: Status.default,
};