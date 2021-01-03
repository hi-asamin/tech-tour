import React from 'react';
import { useHistory } from 'react-router-dom';

import * as Usecase from 'usecases/book';
import { BookResponse } from 'domain/api/models/book';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import logo from 'logo.svg';

const useStyles = makeStyles({
  root: {
    margin: '1rem',
    textAlign: 'center',
  },
  img: {
    width: '15rem',
    height: 'auto',
  },
});

export interface MainProps {
  book: BookResponse,
}

export const BookCard = (props: MainProps) => {
  const { book } = props;
  const history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    Usecase.setBookInfo({ book });
    history.push(`/book/edit`);
  }
  return (
    <>
      <Link onClick={handleClick}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia>
              <img src={logo} className={classes.img} alt="logo" />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {book.title}
              </Typography>
              {book.genre.genre}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  )
}