import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { BookRequest, BookResponse, BookIndexState, Status } from 'domain/api/models/book';

const uri = '/books';
const headers = {
  'Content-Type': 'application/json',
}

export async function findAll(): Promise<BookResponse[]> {
  const res: AxiosResponse<BookResponse[]> = await axios.get(uri);
  return res.data;
}

export async function findOne(id: number): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.get(`${uri}/${id}`);
  return res.data;
}

export async function create(body: BookRequest): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.post(uri, body, {headers});
  return res.data;
}

export async function update(id: number, body: BookRequest): Promise<BookResponse> {
  const res: AxiosResponse<BookResponse> = await axios.post(`${uri}/${id}`, body, {headers});
  return res.data;
}

export async function deleteById(id: number): Promise<void> {
  await axios.delete(`${uri}/${id}`);
}

export const reducers = {
  updateBookIndexStateAction: (state: BookIndexState, action: PayloadAction<BookIndexState>) => ({
    ...state,
    loading: action.payload.loading,
    books: action.payload.books,
    status: action.payload.status,
  }),
  clearBookIndexStateAction: (state: BookIndexState): BookIndexState => ({
    ...state,
    loading: false,
    books: [],
    status: Status.default,
  }),
};