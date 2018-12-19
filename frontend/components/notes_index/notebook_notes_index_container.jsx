import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchNotes } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { selectNote, selectNotebook } from "../../actions/ui_actions";
import { withRouter } from "react-router";
import { selectNotesInNotebook } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  const notebookId = ownProps.match.params.notebookId;
  const selectedNotebook = state.entities.notebooks[notebookId];

  const title = selectedNotebook ? selectedNotebook.title : null;
  const notes = selectNotesInNotebook(state, Number(notebookId));
  return {
    notes,
    selectedNotebook,
    path: `/app/notebooks/${notebookId}/notes`,
    selectedNoteId: state.ui.selectedNoteId,
    selectedNotebookId: state.ui.selectedNotebookId,
    title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    selectNote: noteId => dispatch(selectNote(noteId)),
    selectNotebook: notebookId => dispatch(selectNotebook(notebookId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotesIndex)
);
