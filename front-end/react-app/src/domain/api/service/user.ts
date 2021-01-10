import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { User } from 'domain/api/models/user';

const uri = '/users';

export async function create(body: User): Promise<void> {
  await axios.post(uri, body);
}

export async function update(id: number, body: User): Promise<void> {
  await axios.put(`${uri}/${id}`, body);
}

export async function deleteById(id: number): Promise<void> {
  await axios.delete(`${uri}/${id}`);
}

export const reducers = {
  updateProfileStateAction: (state: User, action: PayloadAction<User>) => ({
    ...state,
    ...action,
  }),
};