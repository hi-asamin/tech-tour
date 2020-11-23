import React from 'react';
import Button from '@material-ui/core/Button';
import { Dialog as MaterialDialog } from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export interface DialogProps {
  children: React.ReactNode;
};

export const Dialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open create dialog
      </Button>
      <MaterialDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="create-dialog-title"
        aria-describedby="create-dialog-description"
      >
        <DialogTitle id="create-dialog-title">本の新規登録</DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            戻る
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary" autoFocus>
            登録
          </Button>
        </DialogActions>
      </MaterialDialog>
    </div>
  );
}
