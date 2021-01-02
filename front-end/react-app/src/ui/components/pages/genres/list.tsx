import React from 'react';

import Grid from '@material-ui/core/Grid';

import { Genre } from 'domain/api/models/genre';

export interface MainProps {
  genres: Genre[],
}
export const GenreList = (props: MainProps) => {
  const { genres } = props;
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Grid container justify="center">
            {genres.map(genre => {
              return (
                <div>{genre.genre}</div>
              )
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}