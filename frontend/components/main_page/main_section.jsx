import React, { Component } from "react";
import AllNotesIndexContainer from "../notes_index/all_notes_index_container";
import NoteShowContainer from "../note_show/note_show_container";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

class MainSection extends Component {
  render(props) {
    return (
      <div className="main-section-wrapper">
        <Switch>
          <Route exact path="/app/notes" component={AllNotesIndexContainer} />
          <Route path="/app/notes/:noteId" component={AllNotesIndexContainer} />
          <Redirect to="/app/notes" />
        </Switch>
        <NoteShowContainer />
      </div>
    );
  }
}

export default withRouter(MainSection);
