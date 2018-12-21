import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { login, clearSessionErrors } from "../../actions/session_actions";
import { signInDemoUser } from "../../actions/ui_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors, ui }) => {
  return {
    errors: errors.session,
    formType: "Sign In",
    signInDemoUser: ui.signInDemoUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
