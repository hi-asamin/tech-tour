import React from 'react';

import { Dummy, MainProps } from 'ui/components/organisms/dummy';

export const DummyTemplate = (props: MainProps) => {
  return (
    <>
      <Dummy {...props}/>
    </>
  )
};