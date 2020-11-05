import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Index } from 'ui/pages';
import { CurriculumRoute } from 'routes/curriculum/curriculum-route';
// import { JavaScriptRoute } from 'routes/curriculum/begginer/javascript/javascript-route';
import { DummyPage } from 'ui/pages/dummy';
import { NoMatch } from 'ui/pages/error/no-match';

export const AppRoute = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Index} />
          <Route path='/curriculum' component={CurriculumRoute} />
          {/* <Route path='/curriculum' component={JavaScriptRoute} /> */}
          <Route path='/dummy' component={DummyPage} />
        </Switch>
        <Route component={NoMatch} />
      </Router>
    </div>
  );
}