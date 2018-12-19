import {
  SELECT_NOTE,
  SELECT_NOTEBOOK,
  OPEN_DROPDOWN,
  OPEN_MODAL,
  CLOSE_UI_ELEMENTS,
  START_LOADING_NOTE,
  END_LOADING_NOTE
} from '../actions/ui_actions';

import merge from 'lodash/merge';

const defaultUIState = {
  selectedNoteId: null,
  selectedNotebookId: null,
  loading_note: true
};

const ui = (state = defaultUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_NOTE:
      return merge({}, state, {
        selectedNoteId: action.noteId
      })
    case SELECT_NOTEBOOK:
      return merge({},
        state, {
          selectedNotebookId: action.notebookId
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
    case START_LOADING_NOTE:
      return merge({}, state, {
        loading_note: true
      })
    case END_LOADING_NOTE:
      return merge({}, state, {
        loading_note: false
      })
    default:
      return state;
  }
};

export default ui;