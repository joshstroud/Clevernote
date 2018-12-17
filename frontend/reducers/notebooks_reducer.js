import merge from 'lodash/merge';

import {
  RECEIVE_NOTEBOOK,
  RECEIVE_NOTEBOOKS,
  DELETE_NOTEBOOK
} from '../actions/notebook_actions';

const notebooksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NOTEBOOKS:
      return merge({}, state,
        action.notebooks)
    case RECEIVE_NOTEBOOK:
      return merge({}, state, {
        [action.notebook.id]: action.notebook
      })
    case DELETE_NOTEBOOK:
      let newState = merge({}, state);
      delete newState[action.notebookId];
      return newState;
    default:
      return state;
  }
};

export default notebooksReducer;