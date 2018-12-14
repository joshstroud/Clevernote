// not used, since backend only returns notes for given user
export const currentUserNotes = (state) => {
  const notes = state.entities.notes;
  debugger
  const filteredKeys = Object.keys(notes).filter(key => {
    notes[key].authorId === state.session.id
  })

  const filteredNotes = filteredKeys.reduce((obj, key) => {
    obj[key] = notes[key];
    return obj
  }, {});

  return filteredNotes;
}