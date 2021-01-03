import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useForm } from "react-hook-form";

import { StateType } from 'store';
import { BookRequest } from 'domain/api/models/book';
import { GenreState } from 'domain/api/models/genre';

import { FormOrganism } from 'ui/components/organisms/book/form';
import Typography from '@material-ui/core/Typography';

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

export const CreatePage = () => {
  const formHooks = useForm<BookRequest>();
  const genreState = useSelector(genreSelector);

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍登録</Typography>
      <FormOrganism genres={genreState.genres} formHooks={formHooks} editable={true} />
    </React.Fragment>
  )
};