import { connect } from "react-redux";
import NoteShow from "./note_show";
import { updateNote } from "../../actions/note_actions";
import { createTagging } from "../../actions/tag_actions";
import { openDropdown } from "../../actions/ui_actions";
import {
  findSelectedNotebookForNoteShow,
  findTagsForSelectedNote,
  findTaggingsForSelectedNote
} from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  // console.log(findTagsForSelectedNote(state));
  // console.log(findTaggingsForSelectedNote(state));
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
    openDropdown: (component, componentId) =>
      dispatch(openDropdown(component, componentId)),
    createTagging: tagging => dispatch(createTagging(tagging)),
    fetchTags: () => dispatch(fetchTags()),
    fetchTaggings: () => dispatch(fetchTaggings())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteShow);
