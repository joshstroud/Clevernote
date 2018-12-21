import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { updateNotebook } from "../../../actions/notebook_actions";
import { withRouter } from "react-router-dom";
import RenameNotebookModal from "./rename_notebook_modal";

const mapStateToProps = (state, ownProps) => {
  console.dir(state.entities.notebooks[state.ui.componentId]);
  return {
    modal: state.ui.dropdown,
    notebook: state.entities.notebooks[state.ui.componentId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    updateNotebook: notebook => dispatch(updateNotebook(notebook))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RenameNotebookModal)
);
