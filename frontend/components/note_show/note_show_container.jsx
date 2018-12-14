import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";
import { dummyNotebooks } from "../../util/dummy_data";

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[state.ui.selectedNoteId],
    notebooks: dummyNotebooks
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
