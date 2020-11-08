import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
import { DummyPage } from 'ui/pages/dummy';
import { NotFound } from 'ui/pages/error/not-found';

export const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Index} />
        <CurriculumRoute />
        <Route path='/dummy' component={DummyPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}