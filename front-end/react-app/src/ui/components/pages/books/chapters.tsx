import React from 'react';
import { Controller, UseFormMethods, ArrayField } from "react-hook-form";

import { BookRequest, Chapter } from 'domain/api/models/book';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export interface ChaptersProps {
  fields: Partial<ArrayField<Record<string, any>, "id">>,
  remove: (index: number) => () => void,
  formHooks: UseFormMethods<BookRequest>,
  editable: boolean;
}

export const Chapters = (props: ChaptersProps) => {
  const { fields, remove,  formHooks, editable } = props;
  return (
    <>
      <FormGroup>
        {fields.map((chapter: Chapter, index: number) => {
          return (
            <>
            <Grid container>
              <Grid item xs={11}>
                <Controller
                  as={TextField}
                  label={`目次 ${index+1}`}
                  name={`chapters[${index}].chapter`}
                  ref={formHooks.register}
                  control={formHooks.control}
                  defaultValue={chapter.chapter}
                  margin="normal"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant='outlined'
                  placeholder='目次を入力してください'
                  disabled={!editable}
                />
              </Grid>
              <Grid item xs={1}>
                <Button variant="contained" color="secondary" size='large' onClick={remove(index)} disabled={!editable} style={{marginTop: '1rem'}} >削除</Button>
              </Grid>
            </Grid>
            </>
          )
        })}
      </FormGroup>
    </>
  )
};
