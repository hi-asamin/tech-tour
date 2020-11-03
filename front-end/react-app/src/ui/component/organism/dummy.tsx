import React from 'react';
import { Link } from 'react-router-dom';
import * as Usecase from 'container/dummy';
import { DummyState } from 'model/dummy';

export interface MainProps {
  dummy: DummyState,
}

export const Dummy = (props: MainProps) => {
  const onClick = () => {
    Usecase.init();
  };

  console.log(props);
  return (
    <>
      <p>初期表示</p>
      <p>
        <Link to='/'>HOME</Link>
      </p>
      <button onClick={onClick}>init</button>
    </>
  )
};