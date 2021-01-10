import React, { useEffect, useCallback } from 'react';
import { useFieldArray, Controller, UseFormMethods } from "react-hook-form";

import { Genre } from 'domain/api/models/genre';

import { Chapters } from 'ui/components/pages/books/chapters';
import { BookRequest, Chapter } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

export interface MainProps {
  genres: Genre[];
  formHooks: UseFormMethods<BookRequest>;
  editable: boolean;
  bookInfo?: BookRequest;
}

export const FormOrganism = (props: MainProps) => {
  const { genres, formHooks, editable, bookInfo } = props;
  const { fields, append, remove } = useFieldArray({
    control: formHooks.control,
    name: "chapters"
  });
  const chapters: Chapter[] | undefined = bookInfo?.chapters;
  
  const initChapter = useCallback(
    () => {
      if (chapters?.length) {
        chapters.forEach(chapter => {
          append({ chapter: chapter.chapter });
        })
      }
    },
    [chapters, append]
  );
    
  useEffect(() => {
    initChapter();
  }, [initChapter]);

  const addChapter = () => {
    append({ chapter: '' })
  };

  const removeChapter = (index: number) => () => {
    const result = window.confirm('本当にこの目次を削除しますか？');
    if (result) {
      remove(index);
    }
  };

  return (
    <React.Fragment>
      <Controller
        as={TextField}
        required
        label='タイトル'
        name='title'
        defaultValue={bookInfo?.title}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='本のタイトルを入力してください'
        disabled={!editable}
      />
      <Controller
        as={TextField}
        label='著者'
        name='author'
        defaultValue={bookInfo?.author}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='本の著者を入力してください'
        disabled={!editable}
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
        defaultValue={bookInfo?.image}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='画像を入力してください'
        disabled={!editable}
      />
      <FormControl fullWidth variant="outlined">
        <InputLabel shrink>ジャンル</InputLabel>
        <Controller
          as={Select}
          name='genre_id'
          defaultValue={bookInfo?.genre_id}
          ref={formHooks.register}
          control={formHooks.control}
          variant="outlined"
          disabled={!editable}
        >
          <MenuItem>
            <em>None</em>
          </MenuItem>
          {genres.map(genre => {
            return <MenuItem key={genre.id} value={genre.id}>{genre.genre}</MenuItem>
          })}
        </Controller>
      </FormControl>
      <Chapters
        fields={fields}
        remove={removeChapter}
        formHooks={formHooks}
        editable={editable}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={addChapter}
        disabled={!editable}
      >
        目次追加
      </Button>
      <Controller
        as={TextField}
        label="メモ"
        name='memo'
        defaultValue={bookInfo?.memo}
        ref={formHooks.register}
        control={formHooks.control}
        multiline
        rows={4}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        placeholder='4行までメモできます'
        disabled={!editable}
      />
    </React.Fragment>
  )
};