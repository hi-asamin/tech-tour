import React from 'react';
import { useHistory } from 'react-router-dom';

import GenericTemplate from 'ui/components/templates/common/GenericTemplate';

import Button from '@material-ui/core/Button';

export const EditPage = () => {
  const history = useHistory();
  const onBackPage = () => {
    history.push('/book');
  }
  const onSubmit = () => {
    onBackPage();
  }
  return (
    <React.Fragment>
      <GenericTemplate>
        <Button variant="contained" onClick={onBackPage}>
          戻る
        </Button>
        <Button variant="contained" size='medium' color="primary" onClick={onSubmit}>
          更新
        </Button>
      </GenericTemplate>
    </React.Fragment>
  )
};