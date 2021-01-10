import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { BookRequest, BookResponse, BookIndexState, Status } from 'domain/api/models/book';
import { SearchState } from 'domain/ui/models/search';

const uri = '/books';

export async function findAll(): Promise<BookResponse[]> {
  const res: AxiosResponse<BookResponse[]> = await axios.get(uri);
  return res.data;
}

export async function findOne(id: number): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.get(`${uri}/${id}`);
  return res.data;
}

export async function search(body: SearchState): Promise<BookResponse[]> {
  const res: AxiosResponse<BookResponse[]> = await axios.post(`${uri}/search`, body);
  return res.data;
}

export async function create(body: BookRequest): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.post(uri, body);
  return res.data;
}

export async function update(id: number, body: BookRequest): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.put(`${uri}/${id}`, body);
  return res.data;
}

export async function deleteById(id: number): Promise<void> {
  await axios.delete(`${uri}/${id}`);
}

export const reducers = {
  fetchBookIndexStateAction: (state: BookIndexState) => ({
    ...state,
    loading: false,
  }),
  updateBookIndexStateAction: (state: BookIndexState, action: PayloadAction<BookIndexState>) => ({
    ...state,
    loading: false,
    books: action.payload.books,
    status: Status.success,
  }),
  failedBookIndexStateAction: (state: BookIndexState) => ({
    ...state,
    loading: false,
    status: Status.failed,
  }),
  clearBookIndexStateAction: (state: BookIndexState): BookIndexState => ({
    ...state,
    loading: false,
    books: [],
    status: Status.default,
  }),
};