export const ALL_NOTES_NOTEBOOK = -1

export const sortNotesByLastUpdate = notes => {
  let notesArr = Object.values(notes);

  notesArr.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return notesArr;
}