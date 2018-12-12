import React, { Component } from "react";

class NoteShowNav extends Component {
  render() {
    return (
      <header className="note-show-nav">
        <button className="note-show-fullscreen-button">FS</button>
        <div className="note-show-current-notebook">My Notebook</div>

        <button className="note-show-share-button">Share</button>
        <button className="options-button">⚙</button>
      </header>
    );
  }
}

export default NoteShowNav;
