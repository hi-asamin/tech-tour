import { PayloadAction } from '@reduxjs/toolkit';

import { DummyState, DummyFormValues, DummyFormStatus } from 'models/dummy';

export const reducers = {
  updateDummyFormValueAction: (state: DummyState, action: PayloadAction<DummyFormValues>) => ({
    ...state,
    form: {
      ...state.form,
      values: action.payload,
    }
  }),
  resetDymmyFormAction: (state: DummyState): DummyState => ({
    ...state,
    form: {
      values: { value: '' },
      status: DummyFormStatus.default,
    },
  }),
};