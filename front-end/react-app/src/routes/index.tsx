import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
import { DummyPage } from 'ui/pages/dummy';
import { NotFound } from 'ui/pages/error/not-found';

export const AppRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/curriculum' component={CurriculumRoute} />
          <Route path='/dummy' component={DummyPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}