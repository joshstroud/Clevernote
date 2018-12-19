import pickBy from "lodash.pickby"

// not used, since backend only returns notes for given user
export const currentUserNotes = (state) => {
  const notes = state.entities.notes;
  const filteredKeys = Object.keys(notes).filter(key => {
    notes[key].authorId === state.session.id
  })

  const filteredNotes = filteredKeys.reduce((obj, key) => {
    obj[key] = notes[key];
    return obj
  }, {});

  return filteredNotes;
}

export const selectNotesInNotebook = (state, notebookId) => {
  const notes = state.entities.notes;
  return pickBy(notes, (value, key) => {
    return value.notebook_id === notebookId
  });
}

export const selectTagsForNoteId = (state) => {

}

export const findSelectedNotebookForNoteShow = (state) => {
  if (state.ui.selectedNoteId &&
    Object.keys(state.entities.notes).length > 0 &&
    Object.keys(state.entities.notebooks).length > 0) {
    return state.entities.notebooks[state.entities.notes[state.ui.selectedNoteId].notebook_id]
  } else {
    return null;
  }
}

export const findSelectedNotebook = (state) => {

  return state.entities.notebooks[state.ui.selectedNotebookId];
}

export const findSelectedOrDefaultNotebook = (state) => {
  let defaultNotebook = null;
  if (Object.keys(state.entities.notebooks).length > 0) {
    defaultNotebook = state.entities.notebooks[Object.keys(state.entities.notebooks)[0]]
  }

  return findSelectedNotebook(state) || defaultNotebook;
}