import React from 'react';
import { useHistory } from 'react-router-dom';

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
      <Button variant="contained" onClick={onBackPage}>
        戻る
      </Button>
      <Button variant="contained" size='medium' color="primary" onClick={onSubmit}>
        更新
      </Button>
    </React.Fragment>
  )
};