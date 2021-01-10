import axios from 'axios';
import { baseURL } from 'config';

export const initAxios = () => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.responseType = 'json';
}


/*
 * The interceptor here ensures that we check for the token in local storage every time an ajax request is made
 */
// axios.interceptors.request.use(
//   config => {
//     const sessionData = JSON.parse(sessionStorage.getItem('gsol-intranet-app'));
//     const token = sessionStorage.length == 0 ? false : sessionData.auth.token;
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${ token }`
//     }
//     return config;
//   },
//   err => {
//     Promise.reject(err)
//   });