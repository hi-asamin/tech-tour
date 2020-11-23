import React from 'react';
import { Route } from 'react-router-dom';

import { DummyPage } from 'ui/components/pages/dummy';

export const DummyRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/dummy' component={DummyPage} />
    </React.Fragment>
  );
}