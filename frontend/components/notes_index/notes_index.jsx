import React, { Component } from "react";
import NotesIndexItem from "./notes_index_item";
import { withRouter } from "react-router-dom";

class NotesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  componentDidUpdate() {
    this.updateSelectedNote();
  }

  updateSelectedNote() {
    let paramSelectedNoteId = this.props.match.params.noteId;
    if (
      this.props.selectedNoteId === null ||
      (paramSelectedNoteId &&
        this.props.selectedNoteId !== this.props.routeNoteId) ||
      paramSelectedNoteId === null
    ) {
      if (this.props.routeNoteId && this.props.notes[this.props.routeNoteId]) {
        this.props.selectNote(this.props.routeNoteId);
      } else if (Object.keys(this.props.notes)[0]) {
        debugger;
        const firstNoteId = Object.keys(this.props.notes)[0];
        this.props.history.push(`${this.props.path}/${firstNoteId}`);
      }
    }
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
      return (
        <NotesIndexItem
          key={noteId}
          note={this.props.notes[noteId]}
          selectedNoteId={this.props.selectedNoteId}
          selectNote={this.props.selectNote}
          history={this.props.history}
          path={this.props.path}
        />
      );
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
