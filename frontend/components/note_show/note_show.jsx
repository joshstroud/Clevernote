import React, { Component } from "react";
import NoteShowNav from "./note_show_nav";
import NoteShowEditor from "./note_show_editor";
import NoteShowTagList from "./note_show_tag_list";

class NoteShow extends Component {
  render() {
    let fullScreenClassName = "";
    if (this.props.fullScreen) {
      fullScreenClassName = " note-show-full-screen";
    }

    return (
      <section className={`note-show-wrapper${fullScreenClassName}`}>
        {/* Hardcode notebook data for now. Add real data and then pass in real data */}
        <NoteShowNav
          notebook={this.props.notebook}
          openDropdown={this.props.openDropdown}
          fetchNotebooks={this.props.fetchNotebooks}
          fullScreen={this.props.fullScreen}
          toggleFullScreen={this.props.toggleFullScreen}
        />
        <NoteShowEditor
          note={this.props.note}
          updateNote={this.props.updateNote}
          selectedNoteId={this.props.selectedNoteId}
          fetchNotes={this.props.fetchNotes}
          fullScreen={this.props.fullScreen}
        />
        <NoteShowTagList
          taggings={this.props.taggings}
          tags={this.props.tags}
          openDropdown={this.props.openDropdown}
          createTagging={this.props.createTagging}
          selectedNoteId={this.props.selectedNoteId}
          fetchTags={this.props.fetchTags}
          fetchTaggings={this.props.fetchTaggings}
        />
      </section>
    );
  }
}

export default NoteShow;
