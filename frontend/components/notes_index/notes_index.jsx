import React, { Component } from "react";
import NotesIndexItem from "./notes_index_item";

class NotesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  renderNumberOfNotes() {
    const numNotes = Object.keys(this.props.notes).length;
    if (numNotes) {
      return <div>{numNotes} Notes</div>;
    } else {
      return null;
    }
  }

  renderNoteIndexItems() {
    const noteIndexItems = Object.keys(this.props.notes).map(noteId => {
      return <NotesIndexItem key={noteId} note={this.props.notes[noteId]} />;
    });

    return <div className="notes-index-items-wrapper">{noteIndexItems}</div>;
  }

  render() {
    return (
      <section className="notes-index-wrapper">
        <header className="notes-index-header">
          <h1 id="notes-index-header-title">{this.props.title}</h1>
          <div id="notes-index-header-footer">{this.renderNumberOfNotes()}</div>
        </header>
        {this.renderNoteIndexItems()}
      </section>
    );
  }
}

export default NotesIndex;
