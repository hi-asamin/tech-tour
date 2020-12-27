import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

import { Chapters } from 'ui/components/pages/books/chapters';
import { BookRequest, Chapter } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

export const CreatePage = () => {
  const history = useHistory();
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [age, setAge] = useState('');
  const formHooks = useForm<BookRequest>();
  const onBackPage = () => {
    history.push('/book');
  }
  const onSubmit = (data: BookRequest) => {
    console.log(data);
  }
  const addChapters = () => {
    const newChapters: Chapter[] = [...chapters];
    newChapters.push({ chapter: '' });
    setChapters(newChapters);
  };

  const removeChapters = (chapter: Chapter) => () => {
    setChapters((current: Chapter[]) => [...current.filter(i => i !== chapter)]);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h3" component="h2">書籍登録</Typography>
      <form onSubmit={formHooks.handleSubmit(onSubmit)} encType='multipart/form-data'>
        <div style={{width: 600, margin: 'auto', display: 'flex', flexDirection: 'column'}} >
          <TextField
            required
            label='タイトル'
            name='title'
            ref={formHooks.register}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            placeholder='本のタイトルを入力してください'
          />
          <TextField
            required
            label='著者'
            name='author'
            ref={formHooks.register}
            margin="normal"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            variant='outlined'
            placeholder='本の著者を入力してください'
          />
          <input
            accept="image/*"
            name='image'
            ref={formHooks.register}
            id="contained-button-file"
            multiple
            type="file"
          />
          <FormControl variant="outlined">
            <InputLabel shrink>ジャンル</InputLabel>
            <Select
              name='genre_id'
              ref={formHooks.register}
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>政治・経済</MenuItem>
              <MenuItem value={20}>雑学</MenuItem>
              <MenuItem value={30}>ゴミ</MenuItem>
            </Select>
          </FormControl>
          <Chapters
            chapters={chapters}
            addChapters={addChapters}
            removeChapters={removeChapters}
            formHooks={formHooks}
          />
          <TextField
            label="メモ"
            name='memo'
            ref={formHooks.register}
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
          <Button variant="contained" onClick={onBackPage}>
            戻る
          </Button>
          <Button type='submit' variant="contained" size='medium' color="primary">
            登録
          </Button>
        </div>
      </form>
    </React.Fragment>
  )
};