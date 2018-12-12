import * as NoteApiUtil from "../util/note_api_util";

export const RECEIVE_ALL_NOTES = "RECEIVE_ALL_NOTES";
export const RECEIVE_SINGLE_NOTE = "RECEIVE_SINGLE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveAllNotes = notes => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes
  };
};

export const fetchAllNotes = () => dispatch => {
  return NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)));
};

export const receiveSingleNote = note => {
  return {
    type: RECEIVE_SINGLE_NOTE,
    note
  }
}

export const fetchSingleNote = (noteId) => dispatch => {
  return NoteApiUtil.fetchNote(noteId)
    .then(note => dispatch(receiveSingleNote(note)));
};

export const createNote = (note) => dispatch => {
  return NoteApiUtil.createNote(note)
    .then(note => dispatch(receiveNote(note)));
};

export const updateNote = (note) => dispatch => {
  return NoteApiUtil.updateNote(note)
    .then(note => dispatch(receiveNote(note)));
};

export const receiveDeleteNote = noteId => {
  return {
    type: DELETE_NOTE,
    noteId
  };
};

export const deleteNote = (noteId) => dispatch => {
  return NoteApiUtil.deleteNote(noteId)
    .then(note => dispatch(receiveDeleteNote(note.id)));
};

export const receiveNoteErrors = (errors) => {
  return {
    type: RECEIVE_NOTE_ERRORS,
    errors
  }
}