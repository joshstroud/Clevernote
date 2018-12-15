import {
  SELECT_NOTE,
  OPEN_DROPDOWN,
  CLOSE_DROPDOWN
} from '../actions/ui_actions';

import merge from 'lodash/merge';

const defaultUIState = {
  selectedNoteId: null
};

const ui = (state = defaultUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_NOTE:
      return merge({}, state, {
        selectedNoteId: action.noteId
      })
    case OPEN_DROPDOWN:
      return merge({}, state, {
        dropdown: action.component
      })
    case CLOSE_DROPDOWN:
      return merge({}, state, {
        dropdown: null
      })
    default:
      return state;
  }
};

export default ui;