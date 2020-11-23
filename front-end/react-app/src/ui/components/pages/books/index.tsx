import React from 'react';
import { useHistory } from 'react-router-dom';

import GenericTemplate from 'ui/components/templates/common/GenericTemplate';

import Button from '@material-ui/core/Button';

export const IndexPage = () => {
  const history = useHistory();
  const onCreate = () => {
    history.push('/book/create');
  }
  return (
    <React.Fragment>
      <GenericTemplate title='本一覧'>
        <div style={{width: 600, margin: '0 0 0 auto'}}>
          <Button variant="contained" color="primary" onClick={onCreate}>
            新規登録
          </Button>
        </div>
      </GenericTemplate>
    </React.Fragment>
  )
};