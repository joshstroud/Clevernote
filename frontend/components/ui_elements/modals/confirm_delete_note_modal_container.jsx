import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { deleteNote } from "../../../actions/note_actions";
import { withRouter } from "react-router-dom";
import ConfirmDeleteNoteModal from "./confirm_delete_note_modal";

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.dropdown,
    history: ownProps.history,
    notebookName: "Hardcoded Notebook",
    selectedNoteId: state.ui.selectedNoteId,
    path: "/app/notes"

    // fix hardcoding above
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    deleteNote: noteId => dispatch(deleteNote(noteId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmDeleteNoteModal)
);
