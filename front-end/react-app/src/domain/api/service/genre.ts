import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { GenreState, Status, Genre } from 'domain/api/models/genre';

const uri = '/genres';

export async function findAll(): Promise<Genre[]> {
  const res: AxiosResponse<Genre[]> = await axios.get(uri);
  return res.data;
}

export async function create(genre: string): Promise<void> {
  await axios.post(uri, { genre });
}

export async function update(id: number, genre: string): Promise<void> {
  await axios.post(`${uri}/${id}`, { genre });
}

export async function deleteById(id: number): Promise<void> {
  await axios.delete(`${uri}/${id}`);
}

export const reducers = {
  updateGenreStateAction: (state: GenreState, action: PayloadAction<GenreState>) => ({
    ...state,
    loading: false,
    genres: action.payload.genres,
    status: Status.success,
  }),
};