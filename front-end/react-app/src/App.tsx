import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';
import { AppRoute } from 'routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
