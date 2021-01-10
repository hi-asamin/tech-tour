import React from 'react';
import { Route } from 'react-router-dom';

import { IndexPage } from 'ui/components/pages/genres/index';
import { CreatePage } from 'ui/components/pages/genres/create';
import { EditPage } from 'ui/components/pages/genres/edit';

export const GenreRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/genre' component={IndexPage} />
      <Route exact path='/genre/create' component={CreatePage} />
      <Route exact path='/genre/edit/:id' component={EditPage} />
    </React.Fragment>
  );
}