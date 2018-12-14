import React, { Component } from "react";
import AllNotesIndexContainer from "../notes_index/all_notes_index_container";
import NoteShowContainer from "../note_show/note_show_container";
import { Route, withRouter } from "react-router-dom";

class MainSection extends Component {
  render(props) {
    return (
      <div className="main-section-wrapper">
        <Route exact to="/notes" component={AllNotesIndexContainer} />
        <NoteShowContainer />
      </div>
    );
  }
}

export default withRouter(MainSection);
