import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";

import { openDropdown } from "../../actions/ui_actions";
import {
  findSelectedNotebookForNoteShow,
  findTagsForSelectedNote,
  findTaggingsForSelectedNote
} from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  console.log(findTagsForSelectedNote(state));
  console.log(findTaggingsForSelectedNote(state));
  return {
    note: state.entities.notes[state.ui.selectedNoteId],
    notebook: findSelectedNotebookForNoteShow(state),
    tags: findTagsForSelectedNote(state),
    taggings: findTaggingsForSelectedNote(state),
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
