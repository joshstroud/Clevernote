import React, { Component } from "react";
import NoteShowContainer from "../note_show/note_show_container";

// Use this component for testing components in isolation

class TestPage extends Component {
  render() {
    return (
      <div>
        <NoteShowContainer />
      </div>
    );
  }
}

export default TestPage;
