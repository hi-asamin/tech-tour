import React from 'react';

import { FormOrganism } from 'ui/components/organisms/book/form';
import Typography from '@material-ui/core/Typography';

export const CreatePage = () => {

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍登録</Typography>
      <FormOrganism />
    </React.Fragment>
  )
};