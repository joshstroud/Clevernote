import React, { Component } from "react";
import NotesIndexItem from "./notes_index_item";

class NotesIndex extends Component {
  render() {
    return (
      <div>
        Note Index
        <ul>
          <NotesIndexItem />
          <NotesIndexItem />
          <NotesIndexItem />
        </ul>
      </div>
    );
  }
}

export default NotesIndex;
