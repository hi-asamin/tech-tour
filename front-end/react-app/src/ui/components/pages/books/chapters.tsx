import React from 'react';
import { Controller, UseFormMethods, ArrayField } from "react-hook-form";

import { BookRequest, Chapter } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export interface ChaptersProps {
  chapters: Partial<ArrayField<Record<string, any>, "id">>,
  remove: (index: number) => () => void,
  formHooks: UseFormMethods<BookRequest>,
}

export const Chapters = (props: ChaptersProps) => {
  const { chapters, remove,  formHooks } = props;
  return (
    <>
      <FormGroup>
        <InputLabel>目次</InputLabel>
        {chapters.map((_: Chapter, index: number) => {
          return (
            <>
              <Controller
                as={TextField}
                label={`目次 ${index+1}`}
                name={`chapters[${index}].chapter`}
                ref={formHooks.register}
                control={formHooks.control}
                defaultValue=''
                margin="normal"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                variant='outlined'
                placeholder='目次を入力してください'
              />
              <Button variant="contained" color="secondary" onClick={remove(index)}>削除</Button>
            </>
          )
        })}
      </FormGroup>
    </>
  )
};
