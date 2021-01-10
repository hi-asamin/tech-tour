import React from 'react';
import { Route } from 'react-router-dom';

import { LoginPage } from 'ui/components/pages/login';

export const LoginRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/login' component={LoginPage} />
    </React.Fragment>
  );
}