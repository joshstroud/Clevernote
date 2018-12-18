import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { createNotebook } from "../../../actions/notebook_actions";
import { withRouter } from "react-router-dom";
import CreateNotebookModal from "./create_notebook_modal";

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.dropdown,
    currentUserId: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    createNotebook: notebook => dispatch(createNotebook(notebook))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateNotebookModal)
);
