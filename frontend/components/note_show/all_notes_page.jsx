import React, { Component } from "react";
import AllNotesIndexContainer from "../notes_index/all_notes_index_container";
import NoteShowContainer from "./note_show_container";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

class AllNotesPage extends Component {
  render(props) {
    return (
      <div className="main-notes-wrapper">
        <AllNotesIndexContainer />
        <NoteShowContainer />
      </div>
    );
  }
}

export default withRouter(AllNotesPage);
