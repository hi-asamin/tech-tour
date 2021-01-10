import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import { BookRequest } from 'domain/api/models/book';

export interface ConfirmProps {
  showModal: boolean;
  onSubmit: (data: BookRequest) => void;
  handleShowModal: () => void;
  item: BookRequest;
  message: string;
  label: string;
}
export const ConfirmModal = (props: ConfirmProps) => {
  const { showModal, onSubmit, handleShowModal, item, message, label } = props;
  return (
    <Dialog
      open={showModal}
      onClose={handleShowModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button　onClick={handleShowModal}>戻る</Button>
        <Button
          onClick={() => {
            handleShowModal();
            onSubmit(item);
          }}
          variant="contained"
          color="primary"
          autoFocus
        >
          {label}
        </Button>
      </DialogActions>
    </Dialog>
  );
};