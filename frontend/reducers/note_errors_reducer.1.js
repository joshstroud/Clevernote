import {
  RECEIVE_NOTE_ERRORS,
  RECEIVE_SINGLE_NOTE,
} from '../actions/note_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case RECEIVE_SINGLE_NOTE:
      return [];
    default:
      return state;
  }
}