export const SELECT_NOTE = "SELECT_NOTE";
export const OPEN_DROPDOWN = "OPEN_DROPDOWN";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_UI_ELEMENTS = "CLOSE_UI_ELEMENTS";

export const selectNote = (noteId) => {
  return {
    type: SELECT_NOTE,
    noteId
  }
}

export const openDropdown = (component) => {
  return {
    type: OPEN_DROPDOWN,
    component
  }
}

export const openModal = (component) => {
  return {
    type: OPEN_MODAL,
    component
  }
}

export const closeUIElements = (component) => {
  return {
    type: CLOSE_UI_ELEMENTS
  }
}