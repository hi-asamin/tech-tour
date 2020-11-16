import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
import { DummyRoute } from 'routes/dummy-route';
import { NotFound } from 'ui/pages/error/not-found';

export const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <React.Fragment>
          <Route exact path='/' component={Index} />
          <CurriculumRoute />
          <DummyRoute />
        </React.Fragment>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}