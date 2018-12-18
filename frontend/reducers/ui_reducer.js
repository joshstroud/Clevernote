import {
  SELECT_NOTE,
  OPEN_DROPDOWN,
  OPEN_MODAL,
  CLOSE_UI_ELEMENTS
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
        dropdown: action.component,
        componentId: action.componentId
      })
    case OPEN_MODAL:
      return merge({}, state, {
        modal: action.component
      })
    case CLOSE_UI_ELEMENTS:
      return merge({}, state, {
        dropdown: null,
        modal: null
      })
    default:
      return state;
  }
};

export default ui;