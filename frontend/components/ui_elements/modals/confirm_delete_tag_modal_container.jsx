import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { deleteTag } from "../../../actions/tag_actions";
import { withRouter } from "react-router-dom";
import ConfirmDeleteTagModal from "./confirm_delete_tag_modal";

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.dropdown,
    tag: state.entities.tags[state.ui.componentId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements()),
    deleteTag: tagId => dispatch(deleteTag(tagId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmDeleteTagModal)
);
