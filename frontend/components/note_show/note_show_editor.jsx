import React, { Component } from "react";

class NoteShowEditor extends Component {
  render() {
    return (
      <div className="note-show-editor-wrapper">
        <img
          src={window.images.noteShowEditorPlaceholder}
          alt=""
          className="note-show-editor-placeholder"
        />
      </div>
    );
  }
}

export default NoteShowEditor;
