import React, { Component } from "react";

class NoteShowNav extends Component {
  render(props) {
    return (
      <header className="note-show-nav">
        <div className="note-show-left">
          <button className="note-show-fullscreen-button">FS</button>
          <div className="note-show-current-notebook">
            | {this.props.notebook.title}
          </div>
        </div>
        <div className="note-show-left">
          {/* <button className="note-show-share-button">Share</button> */}
          <button className="options-button">⚙</button>
        </div>
      </header>
    );
  }
}

export default NoteShowNav;
