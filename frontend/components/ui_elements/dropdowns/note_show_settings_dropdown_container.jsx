import React from "react";
import { closeDropdown } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { withRouter } from "react-router-dom";
import { deleteNote } from "../../../actions/note_actions";
import NoteShowSettingsDropdown from "./note_show_settings_dropdown";

const mapStateToProps = (state, ownProps) => {
  return {
    selectedNote: state.entities.notes[state.ui.selectedNoteId],
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history,
    selectedNoteId: state.ui.selectedNoteId,
    path: "/app/notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeDropdown: () => dispatch(closeDropdown()),
    deleteNote: noteId => dispatch(deleteNote(noteId)),
    createNote: note => dispatch(createNote(note))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteShowSettingsDropdown)
);
