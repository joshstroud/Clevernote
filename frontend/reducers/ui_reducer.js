import {
  SELECT_NOTE,
  SELECT_NOTEBOOK,
  OPEN_DROPDOWN,
  OPEN_MODAL,
  CLOSE_UI_ELEMENTS,
  START_LOADING_NOTE,
  END_LOADING_NOTE,
  TOGGLE_FULL_SCREEN,
  SIGN_IN_DEMO_USER
} from '../actions/ui_actions';

import merge from 'lodash/merge';

const defaultUIState = {
  selectedNoteId: null,
  selectedNotebookId: null,
  loadingNote: true,
  fullScreen: false,
  signInDemoUser: false
};

const ui = (state = defaultUIState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SELECT_NOTE:
      return merge({}, state, {
        selectedNoteId: action.noteId,
        signInDemoUser: false
      })
    case SELECT_NOTEBOOK:
      return merge({},
        state, {
          selectedNotebookId: action.notebookId,
          signInDemoUser: false
        })
    case OPEN_DROPDOWN:
      return merge({}, state, {
        dropdown: action.component,
        componentId: action.componentId
      })
    case OPEN_MODAL:
      return merge({}, state, {
        modal: action.component,
        componentId: action.componentId
      })
    case CLOSE_UI_ELEMENTS:
      return merge({}, state, {
        dropdown: null,
        modal: null
      })
    case START_LOADING_NOTE:
      return merge({}, state, {
        loadingNote: true
      })
    case END_LOADING_NOTE:
      return merge({}, state, {
        loadingNote: false
      })
    case TOGGLE_FULL_SCREEN:
      return merge({}, state, {
        fullScreen: !state.fullScreen
      })
    case SIGN_IN_DEMO_USER:
      return merge({}, state, {
        signInDemoUser: true
      })
    default:
      return state;
  }
};

export default ui;