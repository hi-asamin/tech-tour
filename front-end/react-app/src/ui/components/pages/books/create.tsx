import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { Chapters } from 'ui/components/pages/books/chapters';
import * as Usecase from 'usecases/book';
import { BookRequest } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const CreatePage = () => {
  const history = useHistory();
  const [age, setAge] = useState('');
  const formHooks = useForm<BookRequest>();
  const { fields, append, remove } = useFieldArray({
    control: formHooks.control,
    name: "chapters"
  });
  const onBackPage = () => {
    history.push('/book');
  }
  const onSubmit = (data: BookRequest) => {
    alert(JSON.stringify(data));
    try {
      Usecase.postBook(data);
      history.push('/book');
    } catch (e) {
      alert(e);
    }
  }
  const addChapter = () => {
    append({ chapter: '' })
  };

  const removeChapter = (index: number) => () => {
    remove(index);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍登録</Typography>
      <form onSubmit={formHooks.handleSubmit(onSubmit)} encType='multipart/form-data'>
        <Controller
          as={TextField}
          required
          label='タイトル'
          name='title'
          ref={formHooks.register}
          control={formHooks.control}
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          placeholder='本のタイトルを入力してください'
        />
        <Controller
          as={TextField}
          label='著者'
          name='author'
          ref={formHooks.register}
          control={formHooks.control}
          defaultValue=''
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          placeholder='本の著者を入力してください'
        />
        {/* <input
          accept="image/*"
          name='image'
          ref={formHooks.register}
          id="contained-button-file"
          multiple
          type="file"
        /> */}
        <Controller
          as={TextField}
          label='画像'
          name='image'
          ref={formHooks.register}
          control={formHooks.control}
          defaultValue=''
          margin="normal"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          variant='outlined'
          placeholder='画像を入力してください'
        />
        <FormControl variant="outlined">
          <InputLabel shrink>ジャンル</InputLabel>
          <Controller
            as={Select}
            name='genre_id'
            ref={formHooks.register}
            control={formHooks.control}
            defaultValue={1}
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>政治・経済</MenuItem>
            <MenuItem value={1}>雑学</MenuItem>
            <MenuItem value={1}>ゴミ</MenuItem>
          </Controller>
        </FormControl>
        <Chapters　chapters={fields} remove={removeChapter} formHooks={formHooks} />
        <Button variant="contained" color="primary" onClick={addChapter}>追加</Button>
        <Controller
          as={TextField}
          label="メモ"
          name='memo'
          ref={formHooks.register}
          control={formHooks.control}
          defaultValue=''
          multiline
          rows={4}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          placeholder='4行までメモできます'
        />
        <Button variant="contained" onClick={onBackPage}>戻る</Button>
        <Button type='submit' variant="contained" size='medium' color="primary">登録</Button>
      </form>
    </React.Fragment>
  )
};