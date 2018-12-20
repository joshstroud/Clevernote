import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchNotesForTag } from "../../actions/note_actions";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { fetchTags, fetchTaggings } from "../../actions/tag_actions";

import { selectNote, selectNotebook } from "../../actions/ui_actions";
import { withRouter } from "react-router";
import { findNotesWithTagId } from "../../util/selectors";
import { ALL_NOTES_NOTEBOOK } from "../../util/note_util";

const mapStateToProps = (state, ownProps) => {
  const tagId = ownProps.match.params.tagId;

  return {
    notes: state.entities.notes,
    tags: state.entities.tags,
    indexType: "tag",
    selectedNotebookId: ALL_NOTES_NOTEBOOK,
    path: `/app/tags/${tagId}/notes`,
    selectedNoteId: state.ui.selectedNoteId,
    selectedNotebookId: ALL_NOTES_NOTEBOOK,
    selectedTagId: tagId,
    title: "All Notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotesForTag: tagId => dispatch(fetchNotesForTag(tagId)),
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
