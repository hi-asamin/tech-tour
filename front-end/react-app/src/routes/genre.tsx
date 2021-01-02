import React from 'react';
import { Route } from 'react-router-dom';

import { IndexPage } from 'ui/components/pages/genres/index';

export const GenreRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/genre' component={IndexPage} />
    </React.Fragment>
  );
}