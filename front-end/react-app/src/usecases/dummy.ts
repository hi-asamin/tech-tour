import { dispatch } from 'store';
import { DummyAction } from 'actions/dummy';
import { DummyFormValues } from 'domain/ui/models/dummy';

export const init = async () => {
  const dummy: DummyFormValues = {
    value: 'dummy',
  }
  dispatch(DummyAction.updateDummyFormValueAction(dummy));
}