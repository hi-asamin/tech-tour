import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { ConfirmModal } from 'ui/components/pages/genres/confirm';
import * as Usecase from 'usecases/genre';
import { GenreRequest } from 'domain/api/models/genre';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const CreatePage = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const { handleSubmit, register, control, getValues } = useForm<GenreRequest>();
  const onBackPage = () => {
    history.push('/genre');
  };
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  const onSubmit = (data: GenreRequest) => {
    try {
      Usecase.postGenre(data);
      history.push('/genre');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">ジャンル登録</Typography>
      <form onSubmit={handleSubmit(handleShowModal)} encType='multipart/form-data'>
        <Controller
          as={TextField}
          required
          label='ジャンル'
          name='genre'
          ref={register}
          control={control}
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          placeholder='本のタイトルを入力してください'
        />
        <Button variant="contained" onClick={onBackPage}>戻る</Button>
        <Button type='submit' variant="contained" size='medium' color="primary" >登録</Button>
        <ConfirmModal
          showModal={showModal}
          onSubmit={onSubmit}
          handleShowModal={handleShowModal}
          item={getValues()}
          message='この内容で保存しますか？'
          label='保存'
        />
      </form>
    </React.Fragment>
  )
};