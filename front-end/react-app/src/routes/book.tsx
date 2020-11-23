import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IndexPage } from 'ui/components/pages/books/index';
import { CreatePage } from 'ui/components/pages/books/create';
import { EditPage } from 'ui/components/pages/books/edit';

export const BookRoute = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/book' component={IndexPage} />
        <Route exact path='/book/create' component={CreatePage} />
        <Route exact path='/book/edit' component={EditPage} />
      </Switch>
    </React.Fragment>
  );
}