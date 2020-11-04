import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/pages';
import { DummyPage } from 'ui/pages/dummy'
export const AppRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route exact path='/dummy' component={DummyPage} />
        </Switch>
      </Router>
    </div>
  );
}