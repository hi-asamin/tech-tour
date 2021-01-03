import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { StateType } from 'store';
import { BookRequest } from 'domain/api/models/book';
import { GenreState } from 'domain/api/models/genre';
import * as Usecase from 'usecases/book';

import { ConfirmModal } from 'ui/components/pages/books/confirm';
import { FormOrganism } from 'ui/components/organisms/book/form';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

export const CreatePage = () => {
  const history = useHistory();
  const formHooks = useForm<BookRequest>();
  const genreState = useSelector(genreSelector);
  const [showModal, setShowModal] = useState(false);
  const onBackPage = () => {
    history.push('/book');
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const onSubmit = (data: BookRequest) => {
    try {
      Usecase.postBook(data);
      history.push('/book');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth="sm" >
        <Typography gutterBottom variant="h3" component="h2">書籍登録</Typography>
        <div style={{textAlign: 'right'}}>
          <Button variant="contained" onClick={onBackPage} >戻る</Button>
        </div>
        <form onSubmit={formHooks.handleSubmit(handleShowModal)} encType='multipart/form-data'>
          <FormOrganism genres={genreState.genres} formHooks={formHooks} editable={true} />
          <Button type='submit' variant="contained" fullWidth color="primary" >登録</Button>
          <ConfirmModal
            showModal={showModal}
            onSubmit={onSubmit}
            handleShowModal={handleShowModal}
            item={formHooks.getValues()}
            message='この内容で書籍を保存しますか？'
            label='保存'
          />
        </form>
      </Container>
    </React.Fragment>
  )
};