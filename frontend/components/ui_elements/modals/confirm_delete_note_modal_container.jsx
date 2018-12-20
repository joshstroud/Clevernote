import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { deleteNote } from "../../../actions/note_actions";
import { withRouter } from "react-router-dom";
import ConfirmDeleteNoteModal from "./confirm_delete_note_modal";

const mapStateToProps = (state, ownProps) => {
  let path = "/app/notes";
  if (ownProps.location.pathname.includes("notebooks")) {
    path = `{ownProps.location.pathname.match(/app\/notebooks\/\d+/g)[0]}/notes`;
  }
  return {
    modal: state.ui.dropdown,
    history: ownProps.history,
    noteTitle: state.entities.notes[state.ui.selectedNoteId].title,
    selectedNoteId: state.ui.selectedNoteId,
    path

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
