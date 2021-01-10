import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { StateType } from 'store';
import { GenreState } from 'domain/api/models/genre';
import * as Usecase from 'usecases/genre';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

interface Column {
  id: 'genre' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'genre', label: 'ジャンル名', minWidth: 170 },
  { id: 'action', label: '', minWidth: 100 },
];

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export const IndexPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const genreState = useSelector(genreSelector);
  useEffect(() => {
    Usecase.getGenreList();
  }, []);

  const handleCreate = () => {
    history.push('/genre/create');
  };

  const handleEdit = (id: number) => {
    history.push(`/genre/edit/${id}`);
  };

  const handleDelete = (id: number) => {
    Usecase.deleteGenre(id);
    // re render
    history.go(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">ジャンル一覧</Typography>
      <Button variant="contained" color="primary" onClick={handleCreate} size="large" style={{float: 'right'}}>新規登録</Button>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {genreState.genres.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell>
                      {row.genre}
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" color="secondary" onClick={() => { handleDelete(row.id) }} size="small" style={{float: 'right'}} >削除</Button>
                      <Button variant="contained" color="primary" onClick={() => { handleEdit(row.id) }} size="small" style={{float: 'right'}} >編集</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={genreState.genres.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </React.Fragment>
  )
};