import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchNotes } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { selectNote } from "../../actions/ui_actions";
import { withRouter } from "react-router";
import { selectNotesInNotebook } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  const selectedNotebook =
    state.entities.notebooks[state.entities.notes[state.ui.selectedNoteId]];

  debugger;
  return {
    notes: selectNotesInNotebook(state, selectedNotebook.id),
    title:
      state.entities.notebooks[state.entities.notes[state.ui.selectedNoteId]],
    selectedNoteId: state.ui.selectedNoteId,
    path: `/app/notebooks/${selectedNotebook.id}`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    selectNote: noteId => dispatch(selectNote(noteId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
