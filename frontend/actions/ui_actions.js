export const SELECT_NOTE = "SELECT_NOTE";
export const OPEN_DROPDOWN = "OPEN_DROPDOWN";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_UI_ELEMENTS = "CLOSE_UI_ELEMENTS";
export const SELECT_NOTEBOOK = "SELECT_NOTEBOOK";
export const START_LOADING_NOTE = "START_LOADING_NOTE";
export const END_LOADING_NOTE = "END_LOADING_NOTE";
export const TOGGLE_FULL_SCREEN = "TOGGLE_FULL_SCREEN"
export const SIGN_IN_DEMO_USER = "SIGN_IN_DEMO_USER"

export const selectNote = (noteId) => {
  return {
    type: SELECT_NOTE,
    noteId
  }
}
export const selectNotebook = (notebookId) => {
  return {
    type: SELECT_NOTEBOOK,
    notebookId
  }
}

export const openDropdown = (component, componentId = null) => {
  return {
    type: OPEN_DROPDOWN,
    component,
    componentId
  }
}

export const openModal = (component, componentId = null) => {
  return {
    type: OPEN_MODAL,
    component,
    componentId
  }
}

export const closeUIElements = (component) => {
  return {
    type: CLOSE_UI_ELEMENTS
  }
}

export const startLoadingNote = () => {
  return {
    type: START_LOADING_NOTE
  }
}

export const endLoadingNote = () => {
  return {
    type: END_LOADING_NOTW

  }
}

export const toggleFullScreen = () => {
  return {
    type: TOGGLE_FULL_SCREEN
  }
}

export const signInDemoUser = () => {
  return {
    type: SIGN_IN_DEMO_USER
  }
}