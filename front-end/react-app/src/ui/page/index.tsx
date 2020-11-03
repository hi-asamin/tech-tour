import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

export const Index = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to='/dummy'>ダミーページ</Link>
        </p>
      </header>
    </div>
  )
};