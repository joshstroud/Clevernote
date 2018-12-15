import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import { logout } from "../../../actions/session_actions";
import { withRouter } from "react-router-dom";
import UserDropdown from "./user_dropdown";

const mapStateToProps = (state, ownProps) => {
  return {
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id],
    history: ownProps.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    closeUIElements: () => dispatch(closeUIElements())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDropdown)
);
