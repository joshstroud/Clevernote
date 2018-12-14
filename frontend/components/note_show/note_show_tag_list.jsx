import React, { Component } from "react";
import NoteShowTag from "./note_show_tag";

class NoteShowTagList extends Component {
  renderTags() {
    return Object.keys(this.props.tags).map(tagId => {
      return <NoteShowTag key={tagId} tag={this.props.tags[tagId]} />;
    });
  }

  render() {
    return (
      <div className="nav-show-tag-list-wrapper">
        <button className="nav-show-add-tag-button">➕</button>
        {this.renderTags()}
      </div>
    );
  }
}

export default NoteShowTagList;
