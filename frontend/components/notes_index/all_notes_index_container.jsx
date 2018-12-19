import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchNotes } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { fetchTags, fetchTaggings } from "../../actions/tag_actions";
import { selectNote, selectNotebook } from "../../actions/ui_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    title: "All Notes",
    selectedNoteId: state.ui.selectedNoteId,
    selectedNotebookId: state.ui.selectedNotebookId,
    path: "/app/notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchTags: () => dispatch(fetchTags()),
    fetchTaggings: () => dispatch(fetchTaggings()),
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
