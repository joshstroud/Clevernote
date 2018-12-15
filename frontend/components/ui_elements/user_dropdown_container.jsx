import React from "react";
import { closeDropdown } from "../../actions/ui_actions";
import { connect } from "react-redux";
import Dropdown from "./dropdown";
import { logout } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

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
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dropdown)
);
