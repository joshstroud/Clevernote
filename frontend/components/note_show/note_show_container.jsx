import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";
import {
  dummyNotebooks,
  dummyTaggings,
  dummyTags
} from "../../util/dummy_data";

const mapStateToProps = (state, ownProps) => {
  console.log(dummyNotebooks);
  return {
    note: state.entities.notes[state.ui.selectedNoteId],
    notebook: dummyNotebooks[1],
    tags: dummyTags
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
