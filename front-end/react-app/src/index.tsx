import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initAxios } from 'interceptors';
import App from './App';

initAxios();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);