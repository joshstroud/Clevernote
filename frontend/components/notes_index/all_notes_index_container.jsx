import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchNotes } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { selectNote } from "../../actions/ui_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    title: "All Notes",
    selectedNoteId: state.ui.selectedNoteId,
    path: "/app/notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),

    selectNote: noteId => dispatch(selectNote(noteId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotesIndex)
);
