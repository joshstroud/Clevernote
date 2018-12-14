import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[state.ui.selectedNoteId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: note => dispatch(updateNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);
