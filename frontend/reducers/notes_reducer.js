import merge from 'lodash/merge';

import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  DELETE_NOTE,
} from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      return merge({}, state, {
        [action.note.id]: action.note
      })
    case DELETE_NOTE:
      let newState = merge({}, state);
      delete newState[action.noteId];
      return newState
    default:
      return state;
  }
};

export default notesReducer;