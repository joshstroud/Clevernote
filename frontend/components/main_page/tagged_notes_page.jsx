import React, { Component } from "react";
import TaggedNotesIndexContainer from "../notes_index/tagged_notes_index_container";
import NoteShowContainer from "../note_show/note_show_container";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

class AllNotesPage extends Component {
  render(props) {
    return (
      <div className="main-notes-wrapper">
        <TaggedNotesIndexContainer />
        <NoteShowContainer />
      </div>
    );
  }
}

export default withRouter(AllNotesPage);
