import React from 'react';

import { Dummy, MainProps } from 'ui/component/organism/dummy';

export const DummyTemplate = (props: MainProps) => {
  return (
    <>
      <Dummy {...props}/>
    </>
  )
};