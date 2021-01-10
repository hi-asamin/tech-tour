import React from 'react';
import { Route } from 'react-router-dom';

import { ProfilePage } from 'ui/components/pages/profile';

export const ProfileRoute = () => {
  return (
    <React.Fragment>
      <Route exact path='/profile' component={ProfilePage} />
    </React.Fragment>
  );
}