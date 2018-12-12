import merge from 'lodash/merge';

import {
  RECEIVE_ALL_NOTES,
  RECEIVE_SINGLE_NOTE,
  DELETE_NOTE,
} from '../actions/note_actions';

const notesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_SINGLE_NOTE:
      debugger
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