import {
  RECEIVE_NOTE_ERRORS,
  RECEIVE_SINGLE_NOTE,
  RECEIVE_ALL_NOTES
} from '../actions/note_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTE_ERRORS:
      return action.errors;
    case RECEIVE_SINGLE_NOTE:
    case RECEIVE_ALL_NOTES:
      return [];
    default:
      return state;
  }
}