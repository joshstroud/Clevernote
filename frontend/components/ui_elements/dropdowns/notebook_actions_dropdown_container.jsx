import React from "react";
import { closeUIElements, openModal } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { deleteNotebook } from "../../../actions/notebook_actions";
import NotebookActionsDropdown from "./notebook_actions_dropdown";

const mapStateToProps = (state, ownProps) => {
  return {
    dropdown: state.ui.dropdown,
    selectedComponentId: state.ui.componentId,
    notebook: ownProps.notebook
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    deleteNotebook: notebookId => dispatch(deleteNotebook(notebookId)),
    openModal: (component, componentId) =>
      dispatch(openModal(component, componentId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotebookActionsDropdown)
);
