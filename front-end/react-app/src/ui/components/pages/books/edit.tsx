import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { StateType } from 'store';
import { GenreState } from 'domain/api/models/genre';

import { FormOrganism } from 'ui/components/organisms/book/form2';
import { ConfirmModal } from 'ui/components/pages/books/confirm';
import * as Usecase from 'usecases/book';
import { BookInfoState } from 'domain/ui/models/book';
import { BookRequest } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const bookInfoSelector = createSelector(
  (state: ReturnType<StateType>) => state['ui/book'],
  (state: BookInfoState) => state,
);

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

export const EditPage = () => {
  const history = useHistory();
  const bookInfoState = useSelector(bookInfoSelector);
  const genreState = useSelector(genreSelector);
  const [editable, setEditable] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const formHooks = useForm<BookRequest>();
  const onBackPage = () => {
    history.push('/book');
  }
  const handleEditable = () => {
    setEditable(!editable);
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  }
  const onSubmit = (data: BookRequest) => {
    try {
      Usecase.putBook(bookInfoState.book.id, data);
      history.push('/book');
    } catch (e) {
      alert(e);
    }
  };
  const onDelete = () => {
    try {
      const result = window.confirm('本当にこの書籍を削除しますか？');
      if (result) {
        Usecase.deleteBook(bookInfoState.book.id);
        history.push('/book');
      }
    } catch (e) {
      alert(e);
    }
  }

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍編集</Typography>
      <div style={{textAlign: 'right'}}>
        <div style={{paddingBottom: '1rem'}}>
          <Button type='button' variant="contained" size='medium' onClick={handleEditable} color={editable?'default':'primary'} style={{marginRight: '1rem'}} >{ editable ? '中断' : '編集'}</Button>
          <Button variant="contained" onClick={onBackPage}>戻る</Button>
        </div>
        <div>
          <Button type='button' variant="contained" size='medium' color="secondary" onClick={onDelete} >削除</Button>
        </div>
      </div>
      <form onSubmit={formHooks.handleSubmit(handleShowModal)} encType='multipart/form-data'>
        <FormOrganism genres={genreState.genres} formHooks={formHooks} editable={editable} bookInfo={bookInfoState.book} />
        <Button type='submit' fullWidth variant="contained" size='medium' color="primary" disabled={!editable} >保存</Button>
        <ConfirmModal
          showModal={showModal}
          onSubmit={onSubmit}
          handleShowModal={handleShowModal}
          item={formHooks.getValues()}
          message='この内容で書籍を保存しますか？'
          label='保存'
        />
      </form>
    </React.Fragment>
  )
};