import * as NotebookApiUtil from "../util/notebook_api_util"

import {
  fetchNotebooks,
  fetchNotebookNotes,
  receiveNotebook,
  createNotebook,
  updateNotebook,
  deleteNotebook,
  receiveNotebookErrors
} from "../actions/notebook_actions"

export const testNotebooks = (store) => {
  // testNotebookApiUtil();
  testNotebooksRedux();
  setupStoreTesting(store);

}

const testNotebookApiUtil = () => {
  window.fetchNotebooks = NotebookApiUtil.fetchNotebooks;
  window.fetchNotebookNotes = NotebookApiUtil.fetchNotebookNotes;
  window.createNotebook = NotebookApiUtil.createNotebook;
  window.updateNotebook = NotebookApiUtil.updateNotebook;
  window.deleteNotebook = NotebookApiUtil.deleteNotebook;
}

const testNotebooksRedux = () => {
  window.fetchNotebooks = fetchNotebooks;
  window.fetchNotebookNotes = fetchNotebookNotes;
  window.receiveNotebook = receiveNotebook;
  window.createNotebook = createNotebook;
  window.updateNotebook = updateNotebook;
  window.deleteNotebook = deleteNotebook;
  window.receiveNotebookErrors = receiveNotebookErrors;
}

const setupStoreTesting = (store) => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}