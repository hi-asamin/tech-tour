import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { StateType } from 'store';
import { GenreState } from 'domain/api/models/genre';
import * as Usecase from 'usecases/genre';
import { SearchKey } from 'domain/ui/models/search';
import * as SearchOption from 'usecases/search';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import CategoryIcon from '@material-ui/icons/Category';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Book Burn
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      paddingRight: 24,
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(8),
    },
  }),
);

const genreSelector = createSelector(
  (state: ReturnType<StateType>) => state['api/genre'],
  (state: GenreState) => state,
);

export interface GenericTemplateProps {
  children: React.ReactNode;
}
const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const genreState = useSelector(genreSelector);
  useEffect(() => {
    Usecase.getGenreList();
  }, []);

  const goHome = () => {
    history.push('/book');
  };
  const handleGenreClick = (genreId?: number) => {
    if (genreId) {
      SearchOption.setSearchOption(SearchKey.genre, genreId);
    } else {
      SearchOption.clearSearchOption();
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <Button color="inherit" onClick={goHome}>Book Burn</Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to='/book' onClick={() => { handleGenreClick() }} >
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary='書籍一覧' />
            </ListItem>
            {genreState.genres.map(genre => (
              <ListItem button key={genre.id} component={Link} to={`/book`} onClick={() => { handleGenreClick(genre.id) }} >
                <ListItemIcon><MenuBookIcon /></ListItemIcon>
                <ListItemText primary={genre.genre} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button component={Link} to='/genre' >
              <ListItemIcon><CategoryIcon /></ListItemIcon>
              <ListItemText primary='ジャンル管理' />
            </ListItem>
            <ListItem button component={Link} to='/profile' >
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText primary='プロフィール編集' />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth="lg" className={classes.container}>
          <div style={{ paddingTop: "2rem" }}>
            {children}
          </div>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default GenericTemplate;