import React, { Component, createRef } from "react";
import NotesIndexItem from "./notes_index_item";
import { findDOMNode } from "react-dom";
import { withRouter } from "react-router-dom";
import { sortNotesByLastUpdate } from "../../util/note_util";

class NotesIndex extends Component {
  constructor(props) {
    super(props);

    // this.selectedNoteIndexItemRef = createRef();
  }

  componentDidMount() {
    this.props.fetchAllNotes();
  }

  componentDidUpdate() {
    this.updateSelectedNote();
  }

  updateSelectedNote() {
    const $containerNode = $(".notes-index-items-wrapper");

    if (
      this.selectedNoteIndexItemRef &&
      $containerNode.scrollTop !== this.selectedNoteIndexItemRef.offsetTop
    ) {
      const node = findDOMNode(this.selectedNoteIndexItemRef);

      $containerNode.scrollTop(node.getBoundingClientRect().top);
    }

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
      // let indexItemRef = createRef();
      // if (note.id === this.props.selectedNoteId) {
      //   indexItemRef = createRef();
      // }
      const indexItem = (
        <NotesIndexItem
          key={note.id}
          note={note}
          ref={ref => (this.indexItemRef = ref)}
          selectedNoteId={this.props.selectedNoteId}
          selectNote={this.props.selectNote}
          history={this.props.history}
          path={this.props.path}
        />
      );

      if (note.id === this.props.selectedNoteId) {
        this.selectedNoteIndexItemRef = this.indexItemRef;
      }

      return indexItem;
    });

    return <div className="notes-index-items-wrapper">{noteIndexItems}</div>;
  }

  render() {
    return (
      <section className="notes-index-wrapper">
        <header className="notes-index-header">
          <div className="notes-index-header-wrapper">
            <h1 id="notes-index-header-title">{this.props.title}</h1>
          </div>
          <div id="notes-index-header-footer">
            <div>{this.renderNumberOfNotes()}</div>
          </div>
        </header>
        {this.renderNoteIndexItems()}
      </section>
    );
  }
}

export default NotesIndex;
