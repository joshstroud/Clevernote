import React, { Component } from "react";
import NoteShowNav from "./note_show_nav";
import NoteShowEditor from "./note_show_editor";
import NoteShowTagList from "./note_show_tag_list";

class NoteShow extends Component {
  render() {
    return (
      <section className="note-show-wrapper">
        <NoteShowNav />
        <NoteShowEditor
          note={this.props.note}
          updateNote={this.props.updateNote}
        />
        <NoteShowTagList />
      </section>
    );
  }
}

export default NoteShow;
