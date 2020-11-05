import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BeginnerRoute } from 'routes/curriculum/begginer/beginner-route';
export const CurriculumRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/curriculum/beginner' component={BeginnerRoute} />
        </Switch>
      </Router>
    </div>
  );
}