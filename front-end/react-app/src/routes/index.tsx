import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Index } from 'ui/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
import { DummyRoute } from 'routes/dummy-route';

export const AppRoute = () => {
  return (
    <Router>
      <Route exact path='/' component={Index} />
      <CurriculumRoute />
      <DummyRoute />
    </Router>
  );
}