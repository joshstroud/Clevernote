import React, { Component } from "react";
import AllNotesPage from "./all_notes_page";
import NotebooksIndexContainer from "../notebooks_index/notebooks_index_container";
import TagsIndexContainer from "../tags_index/tags_index_container";
import NotebookNotesPage from "./notebook_notes_page";
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
            path="/app/notebooks/:notebookId/notes/:noteId"
            component={NotebookNotesPage}
          />
          <Route
            path="/app/notebooks/:notebookId"
            component={NotebookNotesPage}
          />
          <Route exact path="/app/tags" component={TagsIndexContainer} />
          <Redirect to="/app/notes" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(MainSection);
