import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { JavaScriptRoute } from 'routes/curriculum/begginer/javascript/javascript-route';

export const BeginnerRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/curriculum/beginner/javascript' component={JavaScriptRoute} />
        </Switch>
      </Router>
    </div>
  );
}