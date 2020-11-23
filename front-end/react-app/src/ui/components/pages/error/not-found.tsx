import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
      <h1>404 NotFound</h1>
      <Link to="/">
        Go Home
      </Link>
    </>
  )
};