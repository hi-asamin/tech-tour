// api通信処理を記述する
import axios, { AxiosResponse } from 'axios';

import { DummyAPIPostData, DummyResponse } from 'api/interface/dummy';

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