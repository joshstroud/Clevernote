import React from "react";
import { closeUIElements, openModal } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { withRouter } from "react-router-dom";
import {
  deleteNote,
  updateNote,
  createNote
} from "../../../actions/note_actions";
import TagDropdown from "./tag_dropdown";

const mapStateToProps = (state, ownProps) => {
  return {
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history,
    rootPath: "/app/tags",
    selectedComponentId: state.ui.componentId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeUIElements: () => dispatch(closeUIElements()),
    deleteTag: tagId => dispatch(deleteTag(tagId)),
    openModal: (component, componentId) =>
      dispatch(openModal(component, componentId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagDropdown)
);
