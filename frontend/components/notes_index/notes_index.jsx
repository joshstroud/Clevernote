import React, { Component } from "react";
import NotesIndexItem from "./notes_index_item";
import { withRouter } from "react-router-dom";
import { sortNotesByLastUpdate } from "../../util/note_util";

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
    let paramSelectedNoteId = Number(this.props.match.params.noteId);
    if (
      this.props.selectedNoteId === null ||
      (paramSelectedNoteId &&
        this.props.selectedNoteId !== paramSelectedNoteId) ||
      Number.isNaN(paramSelectedNoteId)
    ) {
      const mostRecentNote = sortNotesByLastUpdate(this.props.notes)[0];
      if (paramSelectedNoteId && this.props.notes[paramSelectedNoteId]) {
        this.props.selectNote(paramSelectedNoteId);
      } else if (mostRecentNote) {
        this.props.history.push(`${this.props.path}/${mostRecentNote.id}`);
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
    const noteIndexItems = sortNotesByLastUpdate(this.props.notes).map(note => {
      return (
        <NotesIndexItem
          key={note.id}
          note={note}
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
