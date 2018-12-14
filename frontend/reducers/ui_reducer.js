import {
  SELECT_NOTE
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
    default:
      return state;
  }
};

export default ui;