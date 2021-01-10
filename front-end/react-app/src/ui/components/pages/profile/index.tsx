import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createSelector } from '@reduxjs/toolkit';

import { StateType } from 'store';
import { User } from 'domain/api/models/user';
import { GenreState } from 'domain/api/models/genre';

import { ProfileOrganism } from 'ui/components/organisms/profile'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

export const ProfilePage = () => {
  const history = useHistory();
  const genreState = useSelector(genreSelector);
  const formHooks = useForm<User>();
  const onBackPage = () => {
    history.push('/book');
  };
  const onSubmit = () => {
    const result = window.confirm('この内容で保存しますか？');
    if (result) {
      onBackPage();
    }
  }
  return (
    <>
      <Container maxWidth="sm" >
        <h1>Profile</h1>
        <form onSubmit={formHooks.handleSubmit(onSubmit)} encType='multipart/form-data'>
          <div style={{textAlign: 'right'}}>
            <Button variant="contained" onClick={onBackPage} >戻る</Button>
          </div>
          <ProfileOrganism formHooks={formHooks} genres={genreState.genres} />
          <Button type='submit' variant="contained" fullWidth color="primary" >登録</Button>
        </form>
      </Container>
    </>
  )
};