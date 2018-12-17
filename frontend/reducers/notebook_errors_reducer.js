import {
  RECEIVE_NOTEBOOK_ERRORS,
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS
} from '../actions/notebook_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOK_ERRORS:
      debugger
      return action.errors;
    case RECEIVE_NOTEBOOK:
    case RECEIVE_NOTEBOOKS:
      return [];
    default:
      return state;
  }
}