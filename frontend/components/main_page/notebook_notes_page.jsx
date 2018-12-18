import React, { Component } from "react";
import NotebookNotesIndexContainer from "../notes_index/notebook_notes_index_container";
import NoteShowContainer from "../note_show/note_show_container";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

class NotebookNotesPage extends Component {
  render(props) {
    return (
      <div className="main-notes-wrapper">
        <NotebookNotesIndexContainer />
        <NoteShowContainer />
      </div>
    );
  }
}

export default withRouter(NotebookNotesPage);
