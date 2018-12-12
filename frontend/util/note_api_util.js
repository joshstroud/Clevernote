export const fetchAllNotes = () => {
  return $.ajax({
    url: "/api/notes",
    method: "GET"
  });
};

export const fetchSingleNote = (noteId) => {
  return $.ajax({
    url: `/api/notes/${noteId}`,
    method: "GET"
  });
};

export const createNote = (note) => {
  return $.ajax({
    url: "/api/notes",
    method: "POST",
    data: {
      note
    }
  });
};

export const updateNote = (note) => {
  return $.ajax({
    url: `/api/notes/${note.id}`,
    method: "PATCH",
    data: {
      note
    }
  });
};

export const deleteNote = (noteId) => {
  return $.ajax({
    url: `/api/notes/${noteId}`,
    method: "DELETE",
  });
};