import React, { Component } from "react";
import NoteShowContainer from "../note_show/note_show_container";
import AllNotesIndexContainer from "../notes_index/all_notes_index_container";
import MainSection from "../main_page/main_section";
import SideNavContainer from "../side_nav/side_nav_container";
import Dropdown from "../ui_elements/dropdown";
// Use this component for testing components in isolation
import { openDropdown } from "../../actions/ui_actions";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(state) {
  return {
    openDropdown: component => dispatch(openDropdown(component))
  };
}

class TestDropdown extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.openDropdown("nav-user");
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Open Dropdown</button>
        <Dropdown />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestDropdown);
