import React, { Component } from "react";

class NotesIndexItem extends Component {
  render() {
    return (
      <div className="notes-index-item-wrapper">
        <div className="notes-index-item-title">Note Title</div>
        <div className="notes-index-item-snippet">
          Evernote is great for taking notes, tracking tasks, managing projects,
          and staying organized.
        </div>
        <div className="notes-index-item-last-updated">Yesterday</div>
      </div>
    );
  }
}

export default NotesIndexItem;
