import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { StateType } from 'store';
import { BookIndexState } from 'domain/api/models/book';
import * as Usecase from 'usecases/book';

import Button from '@material-ui/core/Button';
import GenericTemplate from 'ui/components/templates/common/GenericTemplate';

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
      <GenericTemplate title='本一覧'>
        <div style={{width: 600, margin: '0 0 0 auto'}}>
          <Button variant="contained" color="primary" onClick={onCreate}>
            新規登録
          </Button>
        </div>
        {bookIndex.books}
      </GenericTemplate>
    </React.Fragment>
  )
};