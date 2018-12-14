export const SELECT_NOTE = "SELECT_NOTE";

export const selectNote = (noteId) => {
  return {
    type: SELECT_NOTE,
    noteId
  }
}