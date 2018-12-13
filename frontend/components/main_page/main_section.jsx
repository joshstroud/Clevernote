import React, { Component } from "react";
import AllNotesIndexContainer from "../notes_index/all_notes_index_container";
import NoteShowContainer from "../note_show/note_show_container";

class MainSection extends Component {
  render() {
    return (
      <div className="main-section-wrapper">
        <AllNotesIndexContainer />
        <NoteShowContainer />
      </div>
    );
  }
}

export default MainSection;
