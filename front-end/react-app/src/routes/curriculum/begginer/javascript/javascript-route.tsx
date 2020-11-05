import React from 'react';
import { Route } from 'react-router-dom';

import { Overview } from 'ui/pages/curriculum/beginner/javascript/overview';
import { Grammar } from 'ui/pages/curriculum/beginner/javascript/grammar';

export const JavaScriptRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/curriculum/beginner/javascript/overview' component={Overview} />
      <Route exact path='/curriculum/beginner/javascript/grammar' component={Grammar} />
    </React.Fragment>
  );
}