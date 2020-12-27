import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { StateType } from 'store';
import { BookIndexState } from 'domain/api/models/book';
import * as Usecase from 'usecases/book';

import { BookList } from 'ui/components/pages/books/list';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const bookIndexSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/book'],
  (state: BookIndexState) => state,
)

export const IndexPage = () => {
  useEffect(() => {
    Usecase.getBookList();
  }, []);
  const bookIndex = useSelector(bookIndexSelector);
  const history = useHistory();
  const onCreate = () => {
    history.push('/book/create');
  }
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍一覧</Typography>
      <Button variant="contained" color="primary" onClick={onCreate} size="large" style={{float: 'right'}}>新規登録</Button>
      <BookList books={bookIndex.books} />
    </React.Fragment>
  )
};