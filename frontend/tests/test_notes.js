import * as NotesApiUtil from "../util/note_api_util"

import {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
  receiveNoteErrors
} from "../actions/note_actions"

export const testNotes = (store) => {
  // testNotesApiUtil();
  testNotesRedux();
  setupStoreTesting(store);

}

const testNotesApiUtil = () => {
  window.fetchNotes = NotesApiUtil.fetchNotes;
  window.fetchNote = NotesApiUtil.fetchNote;
  window.createNote = NotesApiUtil.createNote;
  window.updateNote = NotesApiUtil.updateNote;
  window.deleteNote = NotesApiUtil.deleteNote;
}

const testNotesRedux = () => {
  window.fetchNotes = fetchNotes;
  window.fetchNote = fetchNote;
  window.createNote = createNote;
  window.updateNote = updateNote;
  window.deleteNote = deleteNote;
  window.receiveNoteErrors = receiveNoteErrors;
}

const setupStoreTesting = (store) => {
  window.getState = store.getState;
  window.dispatch = store.dispatch;
}

const user = {
  email: "josh@gmail.com",
  password: "password"
}