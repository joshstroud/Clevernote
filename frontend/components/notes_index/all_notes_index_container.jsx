import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchAllNotes } from "../../actions/note_actions";
import { selectNote } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    title: "All Notes",
    selectedNoteId: state.ui.selectedNoteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes()),
    selectNote: noteId => dispatch(selectNote(noteId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
