import React, { Component } from "react";
import NoteShowNav from "./note_show_nav";
import NoteShowEditor from "./note_show_editor";
import NoteShowTagList from "./note_show_tag_list";

class NoteShow extends Component {
  render() {
    return (
      <div>
        <NoteShowNav />
        <NoteShowEditor />
        <NoteShowTagList />
      </div>
    );
  }
}

export default NoteShow;
