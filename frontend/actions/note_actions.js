import * as NoteApiUtil from "../util/note_api_util";

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const RECEIVE_NOTE_ERRORS = "RECEIVE_NOTE_ERRORS";

export const receiveNotes = notes => {
  return {
    type: RECEIVE_NOTES,
    notes
  };
};

export const fetchNotesForTag = (tagId) => dispatch => {
  return NoteApiUtil.fetchNotesForTag(tagId)
    .then(notes => dispatch(receiveNotes(notes)));
};


export const fetchNotes = () => dispatch => {
  return NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)));
};

export const receiveNote = note => {
  return {
    type: RECEIVE_NOTE,
    note
  }
}

export const fetchNote = (noteId) => dispatch => {
  return NoteApiUtil.fetchNote(noteId)
    .then(note => dispatch(receiveNote(note)));
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