import React, { Component } from "react";
import { connect } from "react-redux";
import MainPage from "./main_page";

function mapStateToProps(state) {
  return {
    fullScreen: state.ui.fullScreen
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(MainPage);
