import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class NotesIndexItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.selectedNoteId === this.props.note.id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  // snippet is 80 characters
  noteSnippet() {
    const noteText =
      "<div>" + this.props.note.title + " " + this.props.note.body + "</div>";
    let plaintext = $(noteText)
      .text()
      .substring(0, 79);

    if (noteText.length > 80) {
      plaintext += "...";
    }
    return plaintext;
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.selected &&
      this.props.note.id !== this.props.selectedNoteId
    ) {
      this.setState({ selected: false });
    } else if (
      !prevState.selected &&
      this.props.note.id === this.props.selectedNoteId
    ) {
      debugger;
      this.setState({ selected: true });
    }
  }

  handleClick(e) {
    if (this.props.selectedNoteId != this.props.note.id) {
      this.props.selectNote(this.props.note.id);
      this.setState({ selected: true, shouldRedirect: true });
      this.props.history.push(`${this.props.path}/${this.props.note.id}`);
    }
  }

  computeClassName() {
    let className = "notes-index-item-wrapper";
    if (this.state.selected) {
      className += " notes-index-item-selected";
    }
    return className;
  }

  render() {
    // if (this.state.shouldRedirect) {
    //   return <Redirect to={`${this.props.path}/${this.props.note.id}`} />;
    // }

    return (
      <div className={this.computeClassName()} onClick={this.handleClick}>
        <div className="notes-index-item-title">{this.props.note.title}</div>
        <div className="notes-index-item-snippet">{this.noteSnippet()}</div>
        <div className="notes-index-item-last-updated">
          {this.props.note.time_since_update}
        </div>
      </div>
    );
  }
}

export default NotesIndexItem;
