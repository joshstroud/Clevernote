import React, { Component } from "react";
import NotesIndexItem from "./notes_index_item";

class NotesIndex extends Component {
  render() {
    return (
      <section className="notes-index-wrapper">
        <header className="notes-index-header">
          <h1 id="notes-index-header-title">All Notes</h1>
          <div id="notes-index-header-footer">
            <div>3 Notes</div>
          </div>
        </header>
        <div className="notes-index-items-wrapper">
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
        </div>
      </section>
    );
  }
}

export default NotesIndex;
