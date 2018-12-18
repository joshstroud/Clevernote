import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";
import {
  dummyNotebooks,
  dummyTaggings,
  dummyTags
} from "../../util/dummy_data";
import { openDropdown } from "../../actions/ui_actions";
import { findSelectedNotebook } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.entities.notes[state.ui.selectedNoteId],
    notebook: findSelectedNotebook(state),
    tags: dummyTags,
    selectedNoteId: state.ui.selectedNoteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNote: note => dispatch(updateNote(note)),
    openDropdown: component => dispatch(openDropdown(component))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);
