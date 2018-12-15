import React, { Component } from "react";
import NoteShowNav from "./note_show_nav";
import NoteShowEditor from "./note_show_editor";
import NoteShowTagList from "./note_show_tag_list";

class NoteShow extends Component {
  render() {
    return (
      <section className="note-show-wrapper">
        {/* Hardcode notebook data for now. Add real data and then pass in real data */}
        <NoteShowNav
          notebook={this.props.notebook}
          openDropdown={this.props.openDropdown}
        />
        <NoteShowEditor
          note={this.props.note}
          updateNote={this.props.updateNote}
        />
        <NoteShowTagList
          taggings={this.props.taggings}
          tags={this.props.tags}
        />
      </section>
    );
  }
}

export default NoteShow;
