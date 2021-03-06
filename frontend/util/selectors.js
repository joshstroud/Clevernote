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

export const currentUserNotebooks = (state) => {
  if (Object.keys(state.entities.notebooks).length === 0) {
    return {};
  }
  const notebooks = state.entities.notebooks;

  return pickBy(notebooks, (notebook, notebookId) => {
    return notebook.owner_id === state.session.id
  })
}

export const currentUserTags = (state) => {
  if (Object.keys(state.entities.tags).length === 0) {
    return {};
  }

  const tags = state.entities.tags;

  return pickBy(tags, (tag, tagId) => {
    return tag.owner_id === state.session.id
  })
}
export const selectNotesInNotebook = (state, notebookId) => {
  const notes = state.entities.notes;
  return pickBy(notes, (value, key) => {
    return value.notebook_id === notebookId
  });
}

export const findSelectedNotebookForNoteShow = (state) => {
  if (state.ui.selectedNoteId &&
    Object.keys(state.entities.notes).length > 0 &&
    Object.keys(state.entities.notebooks).length > 0 &&
    state.entities.notes[state.ui.selectedNoteId]) {
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
    const notebooksArray = Object.values(state.entities.notebooks)
    defaultNotebook = notebooksArray[notebooksArray.length - 1]
  }

  return findSelectedNotebook(state) || defaultNotebook;
}

export const findTagsForSelectedNote = (state, noteId = state.ui.selectedNoteId) => {
  if (!state.ui.selectedNoteId) {
    return {};
  }

  const taggingsForSelectedNote = findTaggingsForSelectedNote(state, noteId);

  if (Object.keys(taggingsForSelectedNote).length === 0) {
    return {};
  }
  return pickBy(state.entities.tags, (tag, tagId) => {

    const tagExistsInTaggings =
      Object.keys(pickBy(taggingsForSelectedNote, (tagging, taggingId) => {
        return tagging.tag_id === tag.id;
        // console.log(`taging tag id: ${tagging.tag_id}, tag id: ${tag.id}`)

      })).length > 0;
    // console.log(`tagExistsInTaggings: ${tagExistsInTaggings}`)

    return tagExistsInTaggings;
  })
}

export const findTaggingsForSelectedNote = (state, noteId = state.ui.selectedNoteId) => {
  if (!noteId) {
    return null;
  }

  // const currentSelectedNoteTags = findTagsForSelectedNote(state);
  // console.log(`${state.ui.selectedNoteItad}`)
  if (noteId) {
    return pickBy(state.entities.taggings, (tagging, taggingId) => {
      // const taggingHasCurrentTag = pickBy(currentSelectedNoteTags, (tag, tagId) => tag.id === tagging.tag_id).length > 0
      const taggingHasCurrentNote = tagging.note_id === noteId
      // console.log(`tagging note id: ${tagging.note_id}, ${taggingHasCurrentNote}`)
      return taggingHasCurrentNote
    })
  }
}

export const findNotesWithTagId = (state, tagId) => {
  if (!state.entities.notes || !state.entities.tags || !state.entities.taggings) {
    return {};
  }

  return pickBy(state.entities.notes, (note, noteId) => {

    const noteTags = findTagsForSelectedNote(state, note.id);
    // console.dir(Object.values(noteTags))
    // console.log(`note.id: ${note.id}, match: ${Object.values(noteTags).some(noteTag => noteTag.id === tagId)}`);

    return Object.values(noteTags).some(noteTag => noteTag.id === tagId);
  })
}