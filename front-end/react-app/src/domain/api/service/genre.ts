import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { GenreState, Status, Genre, GenreRequest } from 'domain/api/models/genre';

const uri = '/genres';

export async function findAll(): Promise<Genre[]> {
  const res: AxiosResponse<Genre[]> = await axios.get(uri);
  return res.data;
}

export async function findOne(id: number): Promise<Genre> {
  const res: AxiosResponse<Genre> = await axios.get(`${uri}/${id}`);
  return res.data;
}

export async function create(body: GenreRequest): Promise<void> {
  await axios.post(uri, body);
}

export async function update(id: number, body: GenreRequest): Promise<void> {
  await axios.put(`${uri}/${id}`, body);
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