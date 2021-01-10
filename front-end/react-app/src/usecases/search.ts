import { dispatch } from 'store';
import { SearchKey } from 'domain/ui/models/search';
import { SearchAction } from 'actions/search';

export const setSearchOption = async (key: SearchKey, value: string | number) => {
  dispatch(SearchAction.updateSearchStateAction({ key, value }));
};

export const clearSearchOption = async () => {
  dispatch(SearchAction.clearSearchStateAction());
};