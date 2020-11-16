import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { IntroductionIndexPage } from 'ui/pages/curriculum/beginner/introduction';

import { Overview } from 'ui/pages/curriculum/beginner/javascript/overview';
import { Grammar } from 'ui/pages/curriculum/beginner/javascript/grammar';

export const CurriculumRoute = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/curriculum/beginner/introduction' component={IntroductionIndexPage} />
        <Route exact path='/curriculum/beginner/javascript/overview' component={Overview} />
        <Route exact path='/curriculum/beginner/javascript/grammar' component={Grammar} />
      </Switch>
    </React.Fragment>
  );
}