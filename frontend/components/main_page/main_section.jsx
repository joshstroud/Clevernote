import React, { Component } from "react";
import AllNotesPage from "../note_show/all_notes_page";
import NotebooksIndexContainer from "../notebooks_index/notebooks_index_container";
import NotebookNotesIndexContainer from "../notes_index/notebook_notes_index_container";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";

class MainSection extends Component {
  render(props) {
    return (
      <div className="main-section-wrapper">
        <Switch>
          <Route exact path="/app/notes" component={AllNotesPage} />
          <Route path="/app/notes/:noteId" component={AllNotesPage} />
          <Route
            exact
            path="/app/notebooks"
            component={NotebooksIndexContainer}
          />
          <Route
            path="/app/notebooks/:notebookId"
            component={NotebookNotesIndexContainer}
          />
          <Redirect to="/app/notes" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainSection);
