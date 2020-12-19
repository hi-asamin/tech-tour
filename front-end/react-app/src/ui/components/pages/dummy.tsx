import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { DummyTemplate } from 'ui/components/templates/dummy';
import { StateType } from 'store';
import { DummyState } from 'domain/ui/models/dummy';
import { MainProps } from 'ui/components/organisms/dummy';

const dummySelector = createSelector(
  (state: ReturnType<StateType>) => state['ui/dummy'],
  (state: DummyState) => state,
)

export const DummyPage = () => {
  const dummyInfo = useSelector(dummySelector);
  const mainProps: MainProps = {
    dummy: dummyInfo,
  };
  return (
    <>
      <DummyTemplate {...mainProps}/>
    </>
  )
};