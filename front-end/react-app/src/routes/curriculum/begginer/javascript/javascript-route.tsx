import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Overview } from 'ui/pages/curriculum/beginner/javascript/overview';
import { Grammar } from 'ui/pages/curriculum/beginner/javascript/grammar';

export const JavaScriptRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/curriculum/beginner/javascript/overview' component={Overview} />
          <Route exact path='/curriculum/beginner/javascript/grammar' component={Grammar} />
        </Switch>
      </Router>
    </div>
  );
}