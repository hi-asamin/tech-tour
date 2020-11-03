import { dispatch } from 'store';
import { DummyAction } from 'action/dummy';
import { DummyFormValues } from 'model/dummy';

export const init = async () => {
  const dummy: DummyFormValues = {
    value: 'dummy',
  }
  dispatch(DummyAction.updateDummyFormValueAction(dummy));
}