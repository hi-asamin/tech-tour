import React from 'react';

import Grid from '@material-ui/core/Grid';

import { BookCard } from 'ui/components/pages/books/card';
import { BookResponse } from 'domain/api/models/book';

export interface MainProps {
  books: BookResponse[],
}
export const BookList = (props: MainProps) => {
  const { books } = props;
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            {books.map(book => {
              return (
                <BookCard book={book} />
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}