import React, { Component } from "react";
import ReactQuill from "react-quill";
import merge from "lodash/merge";

class NoteShowEditor extends Component {
  constructor(props) {
    super(props);
    if (props.note) {
      this.state = {
        body: props.note.body
      };
    } else {
      this.state = {
        body: ""
      };
    }

    this.handleChange = this.handleChange.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      (!prevProps.note && this.props.note) ||
      (prevProps.note && prevProps.note.body !== this.props.note.body)
    ) {
      this.setState({ body: this.props.note.body });
    }
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  saveNote(e) {
    e.preventDefault();
    debugger;
    const updatedNote = merge({}, this.props.note, { body: this.state.body });

    this.props.updateNote(updatedNote);
  }

  render() {
    return (
      <div className="note-show-editor-wrapper">
        <button onClick={this.saveNote}>Save</button>

        <ReactQuill value={this.state.body} onChange={this.handleChange} />
      </div>
    );
  }
}

export default NoteShowEditor;
