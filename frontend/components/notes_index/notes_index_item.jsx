import React, { Component } from "react";

class NotesIndexItem extends Component {
  // 80 characters
  noteSnippet() {
    const noteText = this.props.note.title + this.props.note.body;
    return noteText.substring(0, 79);
  }
  render() {
    return (
      <div className="notes-index-item-wrapper">
        <div className="notes-index-item-title">{this.props.note.title}</div>
        <div className="notes-index-item-snippet">{this.noteSnippet()}</div>
        <div className="notes-index-item-last-updated">Yesterday</div>
      </div>
    );
  }
}

export default NotesIndexItem;
