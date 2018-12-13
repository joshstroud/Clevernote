import React, { Component } from "react";
import NoteShowTag from "./note_show_tag";

class NoteShowTagList extends Component {
  render() {
    return (
      <div className="nav-show-tag-list-wrapper">
        <button className="nav-show-add-tag-button">➕</button>
        <NoteShowTag />
        <NoteShowTag />
        <NoteShowTag />
      </div>
    );
  }
}

export default NoteShowTagList;
