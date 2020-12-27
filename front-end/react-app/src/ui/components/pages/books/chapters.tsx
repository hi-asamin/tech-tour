import React from 'react';
import { Controller, UseFormMethods } from "react-hook-form";

import { BookRequest, Chapter } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export interface ChaptersProps {
  chapters: Chapter[],
  addChapters: () => void,
  removeChapters: (chapter: Chapter) => () => void,
  formHooks: UseFormMethods<BookRequest>,
}

interface ChapterFieldsProps {
  chapter: Chapter,
  index: number,
  removeChapters: (chapter: Chapter) => () => void,
  formHooks: UseFormMethods<BookRequest>,
}

export const Chapters = (props: ChaptersProps) => {
  const { chapters, addChapters, removeChapters, formHooks } = props;
  return (
    <>
      <FormGroup>
        <InputLabel>目次</InputLabel>
        <Button variant="contained" color="primary" onClick={addChapters}>追加</Button>
        {chapters.map((chapter: Chapter, index: number) =>
          <ChapterFields chapter={chapter} index={index} removeChapters={removeChapters} formHooks={formHooks} />
        )}
      </FormGroup>
    </>
  )
};

const ChapterFields = (props: ChapterFieldsProps) => {
  const { chapter, index, removeChapters, formHooks } = props;
  const fieldPrefix = `chapters[${index}].chpater`;
  return (
    <>
      <InputLabel>目次: {index + 1}</InputLabel>
      <Controller
        as={TextField}
        required
        label='目次'
        name={fieldPrefix}
        ref={formHooks.register}
        control={formHooks.control}
        margin="normal"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        variant='outlined'
        placeholder='目次を入力してください'
      />
      <Button variant="contained" color="secondary" style={{marginRight: '10px'}} onClick={removeChapters(chapter)}>削除</Button>
    </>
  );
};
