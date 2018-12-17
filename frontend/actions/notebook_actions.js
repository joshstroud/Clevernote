import {
  receiveNotes
} from "./note_actions"


import * as NotebookApiUtil from "../util/notebook_api_util";

export const RECEIVE_NOTEBOOKS = "RECEIVE_NOTEBOOKS";
export const RECEIVE_NOTEBOOK = "RECEIVE_NOTEBOOK"
export const DELETE_NOTEBOOK = "DELETE_NOTEBOOK";
export const RECEIVE_NOTEBOOK_ERRORS = "RECEIVE_NOTEBOOK_ERRORS";

export const receiveNotebook = notebook => {
  return {
    type: RECEIVE_NOTEBOOK,
    notebook
  };
};

export const receiveNotebooks = notebooks => {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  };
};

export const fetchNotebooks = () => dispatch => {
  return NotebookApiUtil.fetchNotebooks()
    .then(notebooks => {
      dispatch(receiveNotebooks(notebooks))
    });
};

export const fetchNotebookNotes = (notebookId) => dispatch => {
  return NotebookApiUtil.fetchNotebookNotes(notebookId)
    .then(notes => dispatch(receiveNotes(notes)));
};

export const createNotebook = (notebook) => dispatch => {
  return NotebookApiUtil.createNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)));
};

export const updateNotebook = (notebook) => dispatch => {
  return NotebookApiUtil.updateNotebook(notebook)
    .then(notebook => dispatch(receiveNotebook(notebook)));
};

export const receiveDeleteNotebook = notebookId => {
  return {
    type: DELETE_NOTEBOOK,
    notebookId
  };
};

export const deleteNotebook = (notebookId) => dispatch => {
  return NotebookApiUtil.deleteNotebook(notebookId)
    .then(notebook => dispatch(receiveDeleteNotebook(notebook.id)));
};

export const receiveNotebookErrors = (errors) => {
  return {
    type: RECEIVE_NOTEBOOK_ERRORS,
    errors
  }
}