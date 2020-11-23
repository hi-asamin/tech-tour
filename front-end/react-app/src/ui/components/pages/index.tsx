import React from 'react';
// import { Link } from 'react-router-dom';
import GenericTemplate from 'ui/components/templates/common/GenericTemplate';

import logo from '../../../logo.svg';

export const Index = () => {
  return (
    <GenericTemplate title=''>
      <div>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            <Link to='/book'>Book Burn</Link>
            </p>
            <p>
            <Link to='/dummy'>ダミーページ</Link>
            </p>
            <p>
            <Link to='/curriculum/beginner/introduction'>ジョースケへようこそ</Link>
            </p>
            <p>
            <Link to='/curriculum/beginner/javascript/overview'>JavaScript学習</Link>
            </p>
            <p>
            <Link to='/curriculum/beginner/javascript/grammar'>JavaScript文法</Link>
          </p> */}
        </header>
      </div>
    </GenericTemplate>
  )
};