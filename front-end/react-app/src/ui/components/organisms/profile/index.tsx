import React from 'react';
import { Controller, UseFormMethods } from "react-hook-form";

import { Genre } from 'domain/api/models/genre';
import { User } from 'domain/api/models/user';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export interface MainProps {
  formHooks: UseFormMethods<User>;
  genres: Genre[];
  profile?: User;
}

export const ProfileOrganism = (props: MainProps) => {
  const { formHooks, genres, profile } = props;
  return (
    <>
      <Controller
        as={TextField}
        required
        label='ユーザー名'
        name='username'
        defaultValue={profile?.username}
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
        label='プロフィール'
        name='introduction'
        defaultValue={profile?.introduction}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='プロフィールを入力してください'
      />
      <Controller
        as={TextField}
        required
        label='職業'
        name='profession'
        defaultValue={profile?.profession}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='職業を入力してください'
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel shrink>好きなジャンル</InputLabel>
        <Controller
          as={Select}
          name='genre_id'
          defaultValue={profile?.genre_id}
          ref={formHooks.register}
          control={formHooks.control}
          variant="outlined"
        >
          <MenuItem>
            <em>None</em>
          </MenuItem>
          {genres.map(genre => {
            return <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>
          })}
        </Controller>
      </FormControl>
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
      <TextField
        type='password'
        required
        label='確認用パスワード'
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='パスワードを入力してください'
      />
    </>
  )
};