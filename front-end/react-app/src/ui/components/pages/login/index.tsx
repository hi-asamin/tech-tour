import React from 'react';
import { useForm, Controller } from "react-hook-form";

import { LoginForm } from 'domain/api/models/login';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export const LoginPage = () => {
  const formHooks = useForm<LoginForm>();
  const onSubmit = () => {
    console.log('login')
  }
  return (
    <>
      <Container maxWidth="sm" >
        <h1>ログイン</h1>
        <form onSubmit={formHooks.handleSubmit(onSubmit)} encType='multipart/form-data'>
          <Controller
            as={TextField}
            required
            label='ユーザー名'
            name='username'
            ref={formHooks.register}
            control={formHooks.control}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            placeholder='ユーザー名を入力してください'
          />
          <Controller
            as={TextField}
            type='password'
            required
            label='パスワード'
            name='password'
            ref={formHooks.register}
            control={formHooks.control}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            placeholder='パスワードを入力してください'
          />
          <Button type='submit' variant="contained" fullWidth color="primary" >ログイン</Button>
        </form>
      </Container>
    </>
  )
};