import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signup, clearSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  const navComponent = {};

  return { errors: errors.session, formType: "Continue" };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
