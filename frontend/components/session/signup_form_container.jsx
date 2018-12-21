import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import { signInDemoUser } from "../../actions/ui_actions";

import SessionForm from "./session_form";

const mapStateToProps = ({ errors, signInDemoUser }, { history }) => {
  const navComponent = {};

  return {
    errors: errors.session,
    formType: "Continue",
    signInDemoUser,
    history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    signInDemoUser: () => dispatch(signInDemoUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SessionForm)
);
