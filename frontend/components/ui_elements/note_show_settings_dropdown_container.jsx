import React from "react";
import { closeDropdown } from "../../actions/ui_actions";
import { connect } from "react-redux";
import Dropdown from "./dropdown";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";
import { deleteNote } from "../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history,
    selectedNoteId: state.ui.selectedNoteId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeDropdown: () => dispatch(closeDropdown()),
    deleteNote: noteId => dispatch(deleteNote(noteId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dropdown)
);
