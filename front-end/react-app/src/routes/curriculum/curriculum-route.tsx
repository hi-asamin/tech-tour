import React from 'react';

import { IntroductionRoute } from './begginer/introduction-route';
import { JavaScriptRoute } from './begginer/javascript-route';
export const CurriculumRoute = () => {
  return (
    <React.Fragment>
      <IntroductionRoute />
      <JavaScriptRoute />
    </React.Fragment>
  );
}