import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { deleteTagging } from "../../../actions/tag_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NoteShowTagDropdown from "./note_show_tag_dropdown";

const mapStateToProps = (state, ownProps) => {
  return {
    dropdown: state.ui.dropdown,
    selectedComponentId: state.ui.componentId,
    tagging: ownProps.tagging
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    deleteTagging: taggingId => dispatch(deleteTagging(taggingId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NoteShowTagDropdown)
);
