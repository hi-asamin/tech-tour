import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/components/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
import { DummyRoute } from 'routes/dummy-route';
import { BookRoute } from 'routes/book';

export const AppRoute = () => {
  return (
    <Router>
      <Route exact path='/' component={Index} />
      <CurriculumRoute />
      <DummyRoute />
      <BookRoute />
    </Router>
  );
}