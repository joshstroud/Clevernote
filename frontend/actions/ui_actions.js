export const SELECT_NOTE = "SELECT_NOTE";
export const OPEN_DROPDOWN = "OPEN_DROPDOWN";
export const CLOSE_DROPDOWN = "CLOSE_DROPDOWN";

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

export const closeDropdown = (component) => {
  return {
    type: CLOSE_DROPDOWN
  }
}