// api通信処理を記述する
import axios, { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';

import { DummyAPIPostData, DummyResponse, DummyState, DummyFormValues, DummyFormStatus } from 'domain/ui/models/dummy';

const headers = {
  'Content-Type': 'application/json',
}
export const api = {
  async dummy(): Promise<AxiosResponse<DummyResponse>> {
    const data: DummyAPIPostData ={
      value: 'hello',
    };
    const response: AxiosResponse<DummyResponse> = await axios.post<DummyResponse>('/uri', data, {headers});
    return response;
  }
}

export const reducers = {
  updateDummyFormValueAction: (state: DummyState, action: PayloadAction<DummyFormValues>) => ({
    ...state,
    form: {
      ...state.form,
      values: action.payload,
    }
  }),
  resetDymmyFormAction: (state: DummyState): DummyState => ({
    ...state,
    form: {
      values: { value: '' },
      status: DummyFormStatus.default,
    },
  }),
};