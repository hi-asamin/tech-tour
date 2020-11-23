import React from 'react';
import { Route } from 'react-router-dom';

import { IntroductionIndexPage } from 'ui/components/pages/curriculum/beginner/introduction';

export const IntroductionRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/curriculum/beginner/introduction' component={IntroductionIndexPage} />
    </React.Fragment>
  );
}