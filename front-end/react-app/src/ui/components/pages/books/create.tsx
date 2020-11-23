import React from 'react';
import { useHistory } from 'react-router-dom';

import GenericTemplate from 'ui/components/templates/common/GenericTemplate';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export const CreatePage = () => {
  const history = useHistory();
  const onBackPage = () => {
    history.push('/book');
  }
  const onSubmit = () => {
    onBackPage();
  }
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  return (
    <React.Fragment>
      <GenericTemplate title='新規登録'>
        {/* タイトル：テキストフィールド */}
        {/* 画像 */}
        {/* ジャンル：セレクトボックス */}
        {/* 目次：任意で増やす */}
        {/* メモ：テキスト */}
        <form onSubmit={onSubmit} encType='multipart/form-data'>
          <div style={{width: 600, margin: 'auto', display: 'flex', flexDirection: 'column'}} >
            <TextField
              required
              label='タイトル'
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
              placeholder='本のタイトルを入力してください'
            />
            <FormControl variant="outlined">
              <InputLabel shrink>Age</InputLabel>
              <Select
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="メモ"
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
      </GenericTemplate>
    </React.Fragment>
  )
};