import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import GenericTemplate from 'ui/components/templates/common/generic-template';

import { Index } from 'ui/components/pages';
import { BookRoute } from 'routes/book';
import { GenreRoute } from 'routes/genre';

export const AppRoute = () => {
  return (
    <Router>
      <GenericTemplate>
        <Route exact path='/' component={Index} />
        <BookRoute />
        <GenreRoute />
      </GenericTemplate>
    </Router>
  );
}